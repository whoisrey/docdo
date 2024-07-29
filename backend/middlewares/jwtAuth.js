const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const jwtAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    next(createError(401, "토큰이 존재하지 않습니다."));
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    next(createError(401, "토큰이 유효하지 않습니다."));
  }
};

module.exports = jwtAuth;
