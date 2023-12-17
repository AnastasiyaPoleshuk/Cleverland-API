const StatusCodes = require("http-status-codes");
const categories = require("../../utils/categories.json");
const checkToken = require("../../utils/checkToken.js");

const getCategories = (req, res) => {
  if (!req) {
    return {
      status: StatusCodes.StatusCodes.NOT_FOUND,
      responseData: "token is not found",
    };
  }
  const isCorrectToken = checkToken(req);
  const responseData = getCategoriesData(isCorrectToken, categories);
  res.status(responseData.status).send(responseData.responseData);
};

function getCategoriesData(isCorrectToken, categories) {
  const resp = {
    status: StatusCodes.StatusCodes.OK,
    responseData: categories,
  };

  if (!isCorrectToken) {
    resp.status = StatusCodes.StatusCodes.BAD_REQUEST;
    resp.responseData = "incorrect token";

    return resp;
  }
  return resp;
}

module.exports = getCategories;
