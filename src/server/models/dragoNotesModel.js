const { Pool } = require('pg');
require('dotenv').config();

let PG_URI;
if (process.env.NODE_ENV === 'test') {
  PG_URI = process.env.POSTGRES_URI_TEST;
} else if (process.env.NODE_ENV === 'dev') {
  PG_URI = process.env.POSTGRES_URI_DEV;
} else {
  PG_URI = process.env.POSTGRES_URI_PROD;
}

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
