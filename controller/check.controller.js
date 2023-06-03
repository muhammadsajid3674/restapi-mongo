const apiLogger = require("../logger/api.logger")
const checkRepository = require("../repository/check.repository")

const getCheck = (req, res) => {
    apiLogger.info("Controller :: get check")
    checkRepository.getCheck().then(data => res.json(data))
}
const postCheck = (req, res) => {
    apiLogger.info("Controller :: get check")
    checkRepository.postCheck(req.body).then(data => res.json(data))
}

module.exports = { getCheck, postCheck }