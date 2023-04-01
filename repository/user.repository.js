const logger = require("../logger/api.logger");
const User = require("../model/user.model");

class UserRepository {
    async authUser({ email, password }) {
        let user;
        try {
            user = await User.findOne({ email });
            if (user && await user.matchPassword(password)) {
                return {
                    message: 'User authenticated',
                    status: true,
                    user
                };
            }
        } catch (error) {
            logger.error('Error::: ' + error);
        }
        return {
            message: 'Invalid email or password',
            status: false
        };
    }
}

module.exports = new UserRepository();