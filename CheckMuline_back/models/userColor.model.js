module.exports = (sequelize, Sequelize) => {
  const User_Color = sequelize.define("user_color", {
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      notNull: true, 
    },
    need_buy:{
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      notNull: true,
    }
  }, {timestamps: false,underscored: true});

  return User_Color;
};