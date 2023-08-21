const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function(req, res, next) {
	try{
		const authourizationHeader = req.headers.authorization;
		console.log(authourizationHeader)
		if (!authourizationHeader) {
			return next(ApiError.UnauthorizedError());
		}
		const accessToken = authourizationHeader.split(' ')[1];
		console.log(accessToken)
		if (!accessToken) {
			return next(ApiError.UnauthorizedError());
		}
		const userData = tokenService.validateAccessToken(accessToken);
		if (!userData) {
			return next(ApiError.UnauthorizedError());
		}
		req.user = userData;
		next();
	}
	catch(e) {
		return next(ApiError.UnauthorizedError());
	}
}