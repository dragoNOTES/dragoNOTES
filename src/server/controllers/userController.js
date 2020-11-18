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
}

module.exports = userController; 