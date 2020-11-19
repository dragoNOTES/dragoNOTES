const db = require('../models/dragoNotesModel');


const userController = {};

userController.addUser = (req, res, next) => {
  const { username, name, userId, avatar} = res.locals;
  
  const query = `
    INSERT INTO users (username, name, github_id, avatar) 
    VALUES ($1, $2, $3, $4)
    ON CONFLICT DO NOTHING;
  `
  db.query(query, [username, name, userId, avatar])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in userController addUser`,
    }));
};

userController.getUserData = (req, res, next) => {
  const { username } = res.locals;

  const query = `
    SELECT * FROM users WHERE username = $1;
  `;

  db.query(query, [username])
    .then((response) => {
      res.locals.userData = response.rows[0];
      return next();
    })
    .catch((error) => next({
      error,
      log: `Error in userController getUserData`,
    }));
}

module.exports = userController; 