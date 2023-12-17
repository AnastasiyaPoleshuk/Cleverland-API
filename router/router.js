const getHealthStatus = require("../routes/healthcheck/healthcheck");
const loginUser = require("../routes/loginUser/loginUser");
const getCategories = require("../routes/getCategories/getCategories");
const getBooks = require("../routes/getBooks/getBooks");
const getUser = require("../routes/getUser/getUser");

const router = (app) => {
  app.get("/healthcheck", (request, response) => {
    const responseData = getHealthStatus();
    response.send(responseData);
  });
  app.get("/api/categories", (request, response) => {
    const responseData = getCategories(request.headers.authorization, response);
    response.send(responseData);
  });
  app.get("/api/books", (request, response) => {
    const responseData = getBooks(request.headers.authorization, response);
    response.send(responseData);
  });
  app.get("/api/users/me", (request, response) => {
    const responseData = getUser(request.headers.authorization, response);
    response.send(responseData);
  });
  app.get("/", (request, response) => {
    response.send("Cleverland API");
  });
  app.post("/api/auth/local", (request, response) => {
    const responseData = loginUser(request, response);
    response.send(responseData);
  });
};

module.exports = router;
