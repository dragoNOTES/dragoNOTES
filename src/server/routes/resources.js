const express = require('express');

const router = express.Router();

const resourcesController = require('../controllers/resourcesController');

router.post('/pinned/:resourceId',
  resourcesController.pinResource,
  (req, res) => {
    res.sendStatus(200);
  });

router.post('/', 
  resourcesController.addResources,
  (req, res) => {  
    res.status(200).json({resource: res.locals.resource });
  });

router.delete('/pinned/:resourceId',
  resourcesController.unpinResource,
  (req, res) => {
    res.sendStatus(200);
  });

router.get('/owned', 
  resourcesController.getOwnedResources,
  (req, res) => {
    res.status(200).json({ownedResources: res.locals.ownedResources})
  });

router.get('/pinned', 
  resourcesController.getPinnedResources,
  (req, res) => {
    res.status(200).json({pinnedResources: res.locals.pinnedResources})
  });

router.get('/:resourceId', 
  resourcesController.getResource,
  (req, res) => {
    res.status(200).json({resource: res.locals.resource})
  });

router.get('/', 
  resourcesController.getPageResources,
  (req, res) => {
    res.status(200).json({resources: res.locals.pageResources})
  });


  module.exports = router;


  // router.get('/?tag=tagname', 
  // resourcesController.taggedResources,
  // (req, res) => {
  //   res.send(200).json({taggesResources: res.locals.taggedResources})
  // })

  // router.put('/:resourceId', 
  // resourcesController.updateResource,
  // (req, res) => {
  
  // });

