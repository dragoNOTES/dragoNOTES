const express = require('express');

const app = express();
const PORT = 3000;




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

  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
