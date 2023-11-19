const getHealthStatus = require("../routes/healthcheck/healthcheck");
const loginUser = require("../routes/loginUser/loginUser");

const router = (app) => {
  app.get("/healthcheck", (request, response) => {
    const responseData = getHealthStatus();
    response.send(responseData);
  });
  app.get("/", (request, response) => {
    response.send("Cleverland API");
  });
  app.post("/login", (request, response) => {
    const responseData = loginUser(request, response);
    response.send(responseData);
  });
};

module.exports = router;
