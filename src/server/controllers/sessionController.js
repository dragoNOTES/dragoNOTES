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

  const { username, id } = res.locals.userDoc;
  const payload = {
    sub: id,
    username: username,
  }

  jwt.sign(payload, SECRET, jwtOptions, (err, token) => {
    if (err) return next(err);
    res.cookie('jwt', token, cookieOptions);
    return next();
  });
};

sessionController.validateSession = (req, res, next) => {
  const redirect = () => res.redirect('/login');

  if (!req.cookies) return redirect();

  const token = req.cookies.jwt;
  if (!token) return redirect();

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return redirect();

    const { sub, username } = decoded;
    res.locals.user = {
      username,
      id: sub,
    };
    return next();
  });
};

sessionController.logOut = (req, res, next) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 3 * 1000),
  };

  res.cookie('jwt', 'sjhdfkj', cookieOptions);
  return next();
}

module.exports = sessionController;
