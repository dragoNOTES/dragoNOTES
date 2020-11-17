import { query } from '../models/dragoNotesModel';

const resourcesController = {};

resourcesController.addResources = (req, res, next) => {
  // Update with req.body.link and req.body.title
}

resourcesController.getResource = (req, res, next) => {
  // Retrieve with req.params.resourceId
}

resourcesController.getPageResources = (req, res, next) => {
  // need to explore this a bit more....
}

resourcesController.getPinnedResources = (req, res, next) => {
  // retrieve with req.params.resourceId
}

resourcesController.getTaggedResources = (req, res, next) => {
  // retrieve with req.query.tag
}

resourcesController.getOwnedResources = (req, res, next) => {
  // retrieve with req.params.username
}

// resourcesController.updateRedource = () => {
//   // update with req.params.resourceId
// }

modules.exports = resourcesController; 