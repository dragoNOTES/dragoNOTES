const express = require('express');

const router = express.Router();

const resourcesController = require('../controllers/resourcesController');


router.post('/', 
  resourcesController.addResources,
  (req, res) => {  
    res.sendStatus(200);
  });

router.get('/:resourceId', 
  resourcesController.getResource,
  (req, res) => {
    res.send(200).json({resource: res.locals.resource})
  });

router.get('/pinned/:resourceId', 
  resourcesController.getPinnedResources,
  (req, res) => {
    res.send(200).json({pinnedResources: res.locals.pinnedResources}
  })

router.get('?tag=tagname', 
  resourcesController.taggedResources,
  (req, res) => {
    res.send(200).json({taggesResources: res.locals.taggedResources}
  })

router.get('/owned/:username', 
  resourcesController.getOwnedResources,
  (req, res) => {
    res.send(200).json({ownedResources: res.locals.ownedResources}
  });

  // router.put('/:resourceId', 
  // resourcesController.updateResource,
  // (req, res) => {
  
  // });