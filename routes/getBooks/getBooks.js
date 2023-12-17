const StatusCodes = require("http-status-codes");
const books = require("../../utils/books.json");
const checkToken = require("../../utils/checkToken.js");

const getBooks = (req, res) => {
  if (!req) {
    return {
      status: StatusCodes.StatusCodes.NOT_FOUND,
      responseData: "token is not found",
    };
  }

  const isCorrectToken = checkToken(req);
  const responseData = getBooksData(isCorrectToken, books);
  res.status(responseData.status).send(responseData.responseData);
};

function getBooksData(isCorrectToken, books) {
  const resp = {
    status: StatusCodes.StatusCodes.OK,
    responseData: books,
  };

  if (!isCorrectToken) {
    resp.status = StatusCodes.StatusCodes.BAD_REQUEST;
    resp.responseData = "incorrect token";

    return resp;
  }
  return resp;
}

module.exports = getBooks;
