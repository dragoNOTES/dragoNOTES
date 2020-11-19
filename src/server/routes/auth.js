const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');


router.get('/login', authController.authWithGithub);

router.get('/callback',
  authController.githubCallback,
  sessionController.setJWT,
  userController.addUser,
  (req, res) => {

    // hacky redirect to dev server
    // should have dev and prod environment conditional
    // prod would redirect to '/'
    return res.redirect('http://localhost:8080');
  }
);

router.get('/logout', 
  sessionController.logOut,
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;