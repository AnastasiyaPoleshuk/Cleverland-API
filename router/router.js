const getHealthStatus = require("../routes/healthcheck/healthcheck");

const router = (app) => {
  app.get("/healthcheck", (request, response) => {
    const responseData = getHealthStatus();
    response.send(responseData);
  });
};

module.exports = router;
