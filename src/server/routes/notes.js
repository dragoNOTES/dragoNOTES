const express = require('express');

const router = express.Router();

const notesController = require('../controllers/notesController');

router.post('/', 
  notesController.addNote,
  (req, res) => {
    res.sendStatus(200);
  })

// are we ever actually just grabbing a random note?
router.get('/:noteId', 
  notesController.getNote,
  (req, res) => {
    res.sendStatus(200)
  })

router.get('/?resource=resouceId', 
  notesController.getResourceNotes,
  (req, res) => {
    res.status(200).json({resourceNotes: resourceNotes})
  })

router.get('/pinned/:username', 
  notesController.getPinnedNotes,
  (req, res) => {
    res.status(200).json({pinnedNotes: pinnedNotes})
  })

router.get('/owned/:username', 
  notesController.getOwnedNotes,
  (req, res) => {
    res.status(200).json({ownedNotes: ownedNotes})
  })

router.put('/:noteId', 
  notesController.updateNote,
  (req, res) => {
    res.sendStatus(200);
  })

  module.exports = router;
