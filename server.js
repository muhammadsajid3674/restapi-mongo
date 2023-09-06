const app = require("./app");
const { ENV, logger } = require("./config/utils");
const Database = require("./src/database");

new Database(ENV.MONGODB_URI) // * connects to the database using MONGODB cluster URL
  .then(() => {
    app.listen(ENV.PORT, () => {
      logger.info(`Server running on port ${ENV.PORT}`);
    });
  })
  .catch((err) => console.error(err));
