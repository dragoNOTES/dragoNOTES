import { query } from '../models/dragoNotesModel';

const tagsController = {};


tagsController.getTags = (req, res, next) => {
  // Get with req.params.tagId

}

tagsController.getPinnedTags = (req, res, next) => {
  // grab with req.query.userId
}

tagsController.addNewTag = (req, res, next) => {
  // Create with req.body.tagName and req.body.resourceId
}

tagsController.addTagToResource = (req, res, next) => {
  // Create with req.body.tagName and req.body.resourceId
}

tagsController.removeTagFromResource = (req, res, next) => {
  // Delete with req.query.tagId and req.query.resourceId
}


modules.exports = tagsController; 