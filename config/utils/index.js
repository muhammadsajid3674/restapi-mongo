module.exports = {
    STATUS_CODES: require("./constants"),
    ERROR_MESSAGE: require("./error"),
    ENV: require("./env-variable"),
    logger: require("./logger"),
    responseJsonHandler: (error, data, expressResponse) => {
      let obj = { error: error, data: data };
      if (obj.error) {
        expressResponse.status(400).json(obj.error);
      } else {
        expressResponse.status(200).json(obj.data);
      }
    },
  };