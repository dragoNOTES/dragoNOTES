/** 
 * TODOs
 * 
 * - Add user authentication/authoriztion
 */

const usersController = {};

usersController.dummyUser = (req, res, next) => {
  res.locals.username = 'bobsmith';
  return next();
}

usersController.addUser = (req, res, next) => {

}

usersController.getOwnedResources = (req, res, next) => {

}

module.exports = usersController; 