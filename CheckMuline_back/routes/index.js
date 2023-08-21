module.exports = app => {

	const user = require("../controllers/user.controller.js");
	const {body} = require('express-validator');

  var router = require("express").Router();

  router.post('/registration',
		body('email').isEmail(),
		body('password').isLength({min:3, max: 32}),
		user.registration);
	router.post('/login', user.login);
	router.post('/logout', user.logout);
	router.get('/activate/:link', user.activate);
	router.get('/refresh', user.refresh);

  app.use('/api', router);
};