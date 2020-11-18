const express = require('express');

const router = express.Router();

const tagsController = require('../controllers/tagsController');


router.get('/',
  tagsController.getTags,
  (req, res) => {
    res.status(200).json({tags: res.locals.tags});
  });

router.get('/pinned/:userId', 
  tagsController.getPinnedTags,
  (req, res) => {
    res.status(200).json({pinnedTags: res.locals.pinnedTags})
  });

router.post('/pinned/:tag',
  tagsController.pinTag,
  (req, res) => {
    res.sendStatus(200);
  });

router.delete('/pinned/:tag',
  tagsController.unpinTag,
  (req, res) => {
    res.sendStatus(200);
  });

router.post('/',
  tagsController.addNewTag,
  tagsControllr.addTagToResource,
  (req, res) => {
    res.sendStatus(200);
  });

router.delete('/:tag',
  tagsController.removeTagFromResource,
  (req, res) => {
    res.sendStatus(200);
  });

  module.exports = router;





