module.exports = class UserDto {
	user_id;
	id;

	constructor(model) {
		this.user_id = model.user_id;
		this.id = model.id;
	}

}