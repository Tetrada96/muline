const db = require("../models");
const ColorModel = db.colors;
const UserModel = db.users;
const UserColorModel = db.users;
const Op = db.Sequelize.Op;

class ColorService {
	async findAll() {
		return await ColorModel.findAll();
	}

	async findColorsByUser(userId) {
		const user = await UserModel.findOne({where: {id: userId},include: {model: ColorModel}, order: [[{model: ColorModel}, 'id', 'ASC']] })
    return user.colors.map(color => {return {
      "id": color.id,
      "color": color.color,
      "name_color_eng": color.name_color_eng,
      "dmc": color.dmc,
      "name_color_ru": color.name_color_ru,
      "count": color.user_color.count,
			"need_buy": color.user_color.need_buy
      }});
	}

	async findColorByDMC(dmc) {
		const color = await ColorModel.findOne({where: {dmc}});
		return color;
	}

	async findAllColorsByDMC(dmc) {
		const colors = await ColorModel.findAll({where: {dmc: {[Op.in]: dmc}}});
		return colors;
	}
}

module.exports = new ColorService();