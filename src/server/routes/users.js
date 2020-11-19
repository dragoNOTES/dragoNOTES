const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', (req, res) => {

})

router.get('/', 
  userController.getUserData,
  (req, res) => {
    res.status(200).json({user: res.locals.userData});
  })

module.exports = router;
