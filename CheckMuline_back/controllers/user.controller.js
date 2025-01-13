const db = require("../models");
const UserModel = db.users;
const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
  async registration(req,res,next) {
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка валидации', errors.array()));
      }
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none', secure: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req,res,next) {
    try{
      const payload = req.body;
      const userData = await userService.login(payload);
      
      return res.json(userData);

    } catch (e) {
      next(e);
    }
  }
  async logout(req,res,next) {
    try{
      const {refreshToken} = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);

    } catch (e) {
      next(e);
    }
  }
  async activate(req,res,next) {
    try{
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(`${process.env.CLIENT_URL}/colors`);
    } catch (e) {
      next(e);
    }
  }
  async refresh(req,res,next) {
    try{
      const {refreshToken} = req.cookies;
      console.log(req.cookies)
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'none', secure: true });
      return res.json(userData);

    } catch (e) {
      next(e);
    }
  }

  async getUser(req,res,next) {
    try {
      console.log(req)
      return res.json(req.user);
    } catch (e) {
      console.log(e)
      next(e);
    }
  }
}

module.exports = new UserController();
