const express = require('express');

const router = express.Router(); 

const notesController = require('../controllers/notesController');
const resourcesController = require('../controllers/resourcesController');
const tagsController = require('../controllers/tagsController');
const userController = require('../controllers/userController');

// STARTER DATA REQUEST
router.get('/', 
  // user authentication and authorization
  // Get all the information to populate state
  tagsController.getPinnedTags,
  resourcesController.getPinnedResources, 
  notesController.getPinnedNotes,
  resourcesController.getOwnedResources,
  (req, res) => {
      res.status(200).json({ 
      pinnedTags: res.locals.pinnedTags,
      pinnedResources: res.locals.pinnedResources,
      pinnedNotes: res.locals.pinnedNotes,
      ownedResources: res.locals.ownedResources,
    });
  }
);
