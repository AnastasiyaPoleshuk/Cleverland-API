const StatusCodes = require("http-status-codes");
const user = require("../../utils/user.json");
const checkToken = require("../../utils/checkToken.js");

const getUser = (req, res) => {
  if (!req) {
    return {
      status: StatusCodes.StatusCodes.NOT_FOUND,
      responseData: "token is not found",
    };
  }

  const isCorrectToken = checkToken(req);
  const responseData = getUserData(isCorrectToken, user);
  res.status(responseData.status).send(responseData.responseData);
};

function getUserData(isCorrectToken, user) {
  const resp = {
    status: StatusCodes.StatusCodes.OK,
    responseData: user,
  };

  if (!isCorrectToken) {
    resp.status = StatusCodes.StatusCodes.BAD_REQUEST;
    resp.responseData = "incorrect token";

    return resp;
  }
  return resp;
}

module.exports = getUser;