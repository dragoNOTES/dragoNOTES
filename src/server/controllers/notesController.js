const db = require('../models/dragoNotesModel');

const notesController = {}

notesController.addNote = async (req, res, next) => {
  // create with body.resourceId and body.noteBody
  const { resourceId, noteBody } = req.body;
  // get from session
  let userId;

  const query = `
    INSERT INTO notes (content, owner_id, resource_id)
      VALUES ($1, $2, $3);
  `;

  try {
    const dbResult = await db.query(query, [noteBody, userId, resourceId]);
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.addNote db.query`,
    });
  }
};


notesController.getNote = (req, res, next) => {
  // get with body.params.noteId
}

notesController.getResourceNotes = async (req, res, next) => {
  // get resourceId from query.params.resourceId
  const { resourceId } = req.query;

  const query = `
    SELECT * FROM notes WHERE resource_id=$1;
  `;

  try {
    const dbResult = await db.query(query, [resourceId]);
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.getResourceNotes db.query`,
    });
  }

}

notesController.getPinnedNotes = async (req, res, next) => {
  // get with params.username
  let userName;

  const query = `
    SELECT * FROM notes WHERE resource_id=$1;
  `;

  try {
    const dbResult = await db.query(query, [resourceId]);
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.getResourceNotes db.query`,
    });
  }
}

notesController.getOwnedNotes = (req, res, next) => {
  // get with params.username
}

notesController.updateNote = (req, res, next) => {
  //update with params.noteId
}


module.exports = notesController;
