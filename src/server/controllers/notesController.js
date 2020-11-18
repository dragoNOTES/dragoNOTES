import { query } from '../models/dragoNotesModel';

const notesController = {}

notesController.addNote = (req, res, next) => {
  // create with body.resourceId and body.noteBody
}

notesController.getNote = (req, res, next) => {
  // get with body.params.noteId
}

notesController.getResourceNotes = (req, res, next) => {
  // get resourceId from query.params.resourceId
}

notesController.getPinnedNotes = (req, res, next) => {
  // get with params.username
}

notesController.getOwnedNotes = (req, res, next) => {
  // get with params.username
}

notesController.updateNote = (req, res, next) => {
  //update with params.noteId
}


module.exports = notesController;
