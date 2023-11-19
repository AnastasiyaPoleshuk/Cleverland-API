const StatusCodes = require("http-status-codes");
const constants = require("../../utils/constants");

const loginUser = (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const identifier = req.body.identifier;
  const userPassword = req.body.password;
  const user = { identifier, password: userPassword };

  const checkResponse = checkUserCredentials(user);

  res.status(checkResponse.status).send(checkResponse.responseData);
};

function checkUserCredentials(user) {
  const checkResponse = {
    status: StatusCodes.StatusCodes.BAD_REQUEST,
    responseData: {
      user: {},
      jwt: "",
    },
  };

  if (user.identifier !== constants.CONSTANTS.MOCK_USER.username) {
    return checkResponse;
  }

  checkResponse.responseData.user = constants.CONSTANTS.MOCK_USER;
  checkResponse.responseData.jwt = createToken();
  checkResponse.status = StatusCodes.StatusCodes.OK;

  return checkResponse;
}

function createToken() {
  return constants.MOCK_JWT;
}

module.exports = loginUser;
