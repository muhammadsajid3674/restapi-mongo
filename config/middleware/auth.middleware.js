const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const { responseJsonHandler, ERROR_MESSAGE, STATUS_CODES } = require('../utils');

const auth = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            responseJsonHandler(ERROR_MESSAGE["008"], null, res);
        }
    }
    if (!token) {
        responseJsonHandler({
            statusCode: STATUS_CODES.UNAUTHORIZED,
            message: 'Authorization failed!, No Token Avaliablwe'
        }, null, res);
    }
}

module.exports = auth;