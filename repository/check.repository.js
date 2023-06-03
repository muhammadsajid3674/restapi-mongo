const apiLogger = require("../logger/api.logger");
const check = require("../model/checkbox.modal")

class CheckRepository {
    async getCheck() {
        let data = {};
        try {
            data = await check.find();
            apiLogger.info('data :: ', data)
        } catch (error) {
            apiLogger.error("Get Error :: " + error);
        }
        return {
            message: "Checkbox Get",
            status: true,
            data
        }
    }
    async postCheck(checkboxes) {
        let data = {};
        try {
            data = await check.create(checkboxes);

        } catch (error) {
            apiLogger.error("Post Error :: " + error);
        }
        return {
            message: "Checkbox created",
            status: true,
            data
        }
    }
}

module.exports = new CheckRepository();