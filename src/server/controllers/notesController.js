const db = require('../models/dragoNotesModel');

const notesController = {}

notesController.addNote = async (req, res, next) => {
  // create with body.resourceId and body.noteBody
  const { resourceId, noteBody } = req.body;
  // get from session
  let userName;

  const query = `
    INSERT INTO notes (content, owner_id, resource_id)
      VALUES ($1, (SELECT _id FROM users WHERE username = $2), $3);
  `;

  try {
    const dbResponse = await db.query(query, [noteBody, userName, resourceId]);
    
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.addNote db.query`,
    });
  }
};


notesController.getNote = async (req, res, next) => {
  // get with body.params.noteId
  const { noteId } = req.params;
  
  const query = `
    SELECT * FROM notes WHERE _id = $1;
  `;

  try {
    const dbResponse = await db.query(query, [noteId]);
    res.locals.note = dbResponse.rows[0];
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.addNote db.query`,
    });
  }
}

notesController.getResourceNotes = async (req, res, next) => {
  // get resourceId from query.params.resourceId
  const { resourceId } = req.query;

  const query = `
    SELECT * FROM notes WHERE resource_id=$1;
  `;

  try {
    const dbResponse = await db.query(query, [resourceId]);
    res.locals.resourceNotes = dbResponse.rows;
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
    SELECT * FROM user_pinned_notes upn
      INNER JOIN users u ON upn.user_id = u._id
      INNER JOIN notes n ON upn.notes_id = n._id
      WHERE u.username = $1;
  `;

  try {
    const dbResponse = await db.query(query, [userName]);
    res.locals.pinnedNotes = dbResponse.rows;
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.getPinnedNotes db.query`,
    });
  }
}

notesController.getOwnedNotes = async (req, res, next) => {
  // get with params.username
  let userName;

  const query = `
    SELECT * FROM notes WHERE owner_id=(SELECT _id FROM users WHERE username=$1);
  `;

  try {
    const dbResponse = await db.query(query, [userName]);
    res.locals.pinnedNotes = dbResponse.rows;
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.getOwnedNotes db.query`,
    });
  }
}

notesController.updateNote = async (req, res, next) => {
  //update with params.noteId
  const { noteBody } = req.body;
  const { noteId } = req.params
  let userName;

  const query = `
  UPDATE notes 
    SET content = $1
    WHERE _id = $2 
    AND owner_id = (SELECT _id FROM users WHERE username = $3);
  `;

  try {
    const dbResponse = await db.query(query, [noteBody, noteId, userName]);
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.updateNote db.query`,
    });
  }
}

notesController.pinNote = async (req, res, next) => {
  // get with params.username
  let userName;
  const { noteId } = req.params;

  const query = `
    INSERT INTO user_pinned_notes (user_id, notes_id)
      VALUES ((SELECT _id FROM users WHERE username=$1), $2)
      ON CONFLICT DO NOTHING;
  `;

  try {
    const dbResponse = await db.query(query, [username, noteId]);
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.pinNote db.query`,
    });
  }
}

notesController.unpinNote = async (req, res, next) => {
  // get with params.username
  let userName;
  const { noteId } = req.params;

  const query = `
    DELETE FROM user_pinned_notes
      WHERE user_id = (SELECT _id FROM users WHERE username = $1)
      AND notes_id = $2;
  `;

  try {
    const dbResponse = await db.query(query, [username, noteId]);
    return next();
  } catch (error) {
    return next({
      error,
      log: `Error in notesController.unpinNote db.query`,
    });
  }
}




module.exports = notesController;
