const db = require("../models");
const UserColorModel = db.user_color;
const ColorModel = db.colors;
const Op = db.Sequelize.Op;

class UserColorService {
	async changeCount(count,userId,colorId) {
		return await UserColorModel.update({count, need_buy: false},{where: {[Op.and]: [{user_id: userId, color_id: colorId}]}})
	}

	async changeNeedBuyColors(userId,colorIds) {
		const existedColors = await UserColorModel.update({need_buy: true},{where: {[Op.and]: [{user_id: userId}, {color_id: {[Op.in]: colorIds}}]}, returning: true, include: {model: ColorModel} });
		return existedColors[1];
	}
}

module.exports = new UserColorService();