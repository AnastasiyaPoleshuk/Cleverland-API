const StatusCodes = require("http-status-codes");
const constants = require("../../utils/constants");
const categories = require("../../utils/categories.json");

const getCategories = (req, res) => {
  if (!req) {
    return {
      status: StatusCodes.StatusCodes.NOT_FOUND,
      responseData: "token is not found",
    };
  }
  const token = req.substring(7, req.length); // вытягиваем токен из строки "Bearer ***-***-**"
  const responseData = getCategoriesData(token);
  return {
    status: responseData.status,
    responseData: responseData.responseData,
  };
};

function getCategoriesData(token) {
  const resp = {
    status: StatusCodes.StatusCodes.OK,
    responseData: categories,
  };

  if (token !== constants.CONSTANTS.MOCK_JWT) {
    resp.status = StatusCodes.StatusCodes.BAD_REQUEST;
    resp.responseData = "incorrect token";

    return resp;
  }
  return resp;
}

module.exports = getCategories;
