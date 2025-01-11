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
	async registration(user_id, refresh_token) {
		const candidate = await UserModel.findOne({ where: { user_id: user_id } });
		console.log('candidate', candidate)
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с почтовым адресом ${user_id} уже существует`);
			return;
		}
		const user = await UserModel.create({ user_id });
		console.log('user', user)

		const userDto = new UserDto(user);
		await this.addColor(userDto.id);
		await tokenService.saveToken(userDto.id, refresh_token);
		return {
			user: userDto
		}
	}

	async addColor(userId) {
		const colors = await colorService.findAll();

		return await UserColorModel.bulkCreate(colors.map(color => {return {'user_id': userId, 'color_id': color.id, count: 0  }}))
	}


	async login(payload) {
		const response = await fetch('https://id.vk.com/oauth2/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body:  new URLSearchParams({
				'grant_type': 'authorization_code',
				'code_verifier': payload.codeVerifier,
				'code': payload.code,
				'client_id': 52910357,
				'device_id': payload.device_id,
				'redirect_uri': 'https://mulinehub.ru'
			})
		})

		const tokens = await response.json()

		const user = await UserModel.findOne({ where: { user_id: tokens.user_id } });
		console.log('user',user)
		if (!user) {
			const user = registration(tokens.user_id, tokens.refresh_token)
			return {
				...tokens,
				user
			}
		}
		else {
			const userDto = new UserDto(user);
			await tokenService.saveToken(userDto.id, tokens.refreshToken);
			return {
				...tokens,
				user: userDto
			}
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
		const response = await fetch('https://id.vk.com/oauth2/auth', {
			method: 'POST',
			body: JSON.stringify(payload)
		})

		const tokens = response.json()
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