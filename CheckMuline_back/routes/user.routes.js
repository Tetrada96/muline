module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const color = require("../controllers/color.controller.js");
  const authMiddleware = require('../middlewares/auth-middleware');

  var router = require("express").Router();

  router.get("/", authMiddleware, user.getUser);

  router.get(`/:userId/colors`, color.findAll );

  router.put(`/:userId/colors/:colorId`, color.changeColorCount);

  router.post(`/:userId/colors`, color.checkColors);

  router.post(`/:userId/colors/need-buy`, color.changeNeedBuyColors);


  app.use('/api/users', router);
};