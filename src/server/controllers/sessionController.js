const jwt = require('jsonwebtoken');

const SECRET = process.env.COOKIE_SECRET;
const EXPIRATION_TIME_IN_SECS = 60 * 60 * 24 * 3;

const sessionController = {};

sessionController.setJWT = (req, res, next) => {
  const jwtOptions = {
    expiresIn: EXPIRATION_TIME_IN_SECS,
  };

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + (EXPIRATION_TIME_IN_SECS + 60) * 1000),
  };

  const { username, userId, name } = res.locals;
  const payload = {
    sub: userId,
    username,
    name,
  }

  jwt.sign(payload, SECRET, jwtOptions, (err, token) => {
    if (err) return next(err);
    console.log("HELLOOOO");
    res.cookie('jwt', token, cookieOptions);
    return next();
  });
};

sessionController.validateSession = (req, res, next) => {
  const reject = () => res.sendStatus(401);

  if (!req.cookies) return reject();

  const token = req.cookies.jwt;
  if (!token) return reject();

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return reject();

    const { username } = decoded;
    res.locals.username = username;
    return next();
  });
};

sessionController.logOut = (req, res, next) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 3 * 1000),
  };

  res.cookie('jwt', '', cookieOptions);
  return next();
}

module.exports = sessionController;
