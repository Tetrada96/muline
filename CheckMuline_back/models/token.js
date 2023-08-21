module.exports = (sequelize, Sequelize, db) => {
  const Token = sequelize.define("token", {
		 refreshToken: {
      type: Sequelize.STRING,
			required: true
    },
  }, {timestamps: false,underscored: true});

  return Token;
};