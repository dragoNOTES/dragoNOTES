const express = require('express');

const router = express.Router();

const notesController = require('../controllers/notesController');

router.post('/pinned/:noteId', 
  notesController.pinNote,
  (req, res) => {
    res.sendStatus(200);
  });

router.delete('/pinned/:noteId', 
  notesController.unpinNote,
  (req, res) => {
    res.sendStatus(200);
  });

router.post('/', 
  notesController.addNote,
  (req, res) => {
    res.status(200).json({note: res.locals.note});
  })

router.get('/owned', 
  notesController.getOwnedNotes,
  (req, res) => {
    res.status(200).json({ownedNotes: res.locals.ownedNotes})
  })

router.get('/pinned', 
  notesController.getPinnedNotes,
  (req, res) => {
    res.status(200).json({pinnedNotes: res.locals.pinnedNotes})
  })

// are we ever actually just grabbing a random note?
router.get('/:noteId', 
  notesController.getNote,
  (req, res) => {
    res.status(200).json({note: res.locals.note});
  })

router.get('/', 
  notesController.getResourceNotes,
  (req, res) => {
    res.status(200).json({resourceNotes: res.locals.resourceNotes})
  })


router.put('/:noteId', 
  notesController.updateNote,
  (req, res) => {
    res.sendStatus(200);
  })

  module.exports = router;
