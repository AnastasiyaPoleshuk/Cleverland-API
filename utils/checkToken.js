const constants = require("./constants");

const checkToken = (tokenString) => {
  const token = tokenString.substring(7, tokenString.length); // вытягиваем токен из строки "Bearer ***-***-**"

  if (token !== constants.CONSTANTS.MOCK_JWT) {
    return false;
  }
  return true;
};

module.exports = checkToken;
