const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api.js');
const notesRouter = require('./routes/notes.js');
const resourcesRouter = require('./routes/resources.js');
const tagsRouter = require('./routes/tags.js');
const usersRouter = require('./routes/users.js');

// TO DO: make sure this file structure is correct
// static file serving if in production
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, './_dist_')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
  });
}


/** 
 * Define route handlers
 */
app.use('/auth', authRouter);
app.use('/api/notes', notesRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/users', usersRouter);
app.use('/api', apiRouter);

// catch-all route handler
app.use('*', (req, res) => (res.sendStatus(404)));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { error: `An error occured, check server logs for more information` },
  };

  const errObj = {
    ...defaultErr,
    ...err,
  };

  console.log(errObj.log, errObj.error);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
