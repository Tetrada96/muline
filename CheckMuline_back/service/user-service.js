const db = require("../models");
const UserModel = db.users;
const UserColorModel = db.user_color;
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const colorService = require('../service/color-service');
const ApiError = require('../exceptions/api-error');

class UserService {
	async registration(email, password) {
		const candidate = await UserModel.findOne({where: {email}});
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
			return;
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const activationLink = uuid.v4();
		const user = await UserModel.create({password: hashPassword, email, activationLink});
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
		

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {
			...tokens,
			user: userDto
		}
	}

	async addColor(userId) {
		const colors = await colorService.findAll();

		return await UserColorModel.bulkCreate(colors.map(color => {return {'user_id': userId, 'color_id': color.id, count: 0  }}))
	}

	async activate(activationLink) {
		const user = await UserModel.findOne({where: {activationLink: activationLink}});
		if (!user) {
			throw ApiError.BadRequest('Некорректная ссылка активации');
		}
		user.isActivated = true;
		const userDto = new UserDto(user);
		await this.addColor(userDto.id);
		await user.save();
	}

	async login(email, password) {
		const user = await UserModel.findOne({where: {email}});
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким email не найден');
		}
		const isPassEquals = await bcrypt.compare(password, user.password);
		if (!isPassEquals) {
			throw ApiError.BadRequest('Неверный логин и/или пароль ');
		}
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {
			...tokens,
			user: userDto
		}
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			console.log(1)
			throw ApiError.UnauthorizedError();
		}
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromBd = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromBd) {
			throw ApiError.UnauthorizedError();
		}
		const user = await UserModel.findByPk(userData.id);
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {
			...tokens,
			user: userDto
		}
	}

	async getAllUsers() {
		const users = await UserModel.findAll();
		const userData = users.map((item => new UserDto(item)))
		return userData;
	}

	async findUserById(userId) {
		const user = await UserModel.findByPk(userId);
		return user;
	}
}

module.exports = new UserService();