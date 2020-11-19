const db = require('../models/dragoNotesModel');

const queryTestModel = {};

queryTestModel.addUser = (req, res, next) => {
  const { username, firstName, lastName } = res.locals;

  const query = `
    INSERT INTO users (username, first_name, last_name) 
      VALUES ($1, $2, $3)
      ON CONFLICT DO NOTHING;
  `;

  db.query(query, [username, firstName, lastName])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in addUser db.query`,
    }));
};