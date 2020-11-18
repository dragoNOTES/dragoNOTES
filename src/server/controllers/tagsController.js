const db = require('../models/dragoNotesModel');

const tagsController = {};

tagsController.getTags = (req, res, next) => {
  // Get with req.params.tagId

  const query = `SELECT name FROM tags;`

  db.query(query)
    .then((response) => {
      res.locals.tags = response.rows;
    })
    .catch((error) => next({
      error,
      log: `Error in tagsController getTags`,
    }));
}

tagsController.getPinnedTags = (req, res, next) => {
  // grab with req.query.userId
  const { username } = req.params;

  const query = `
    SELECT name FROM user_pinned_tags upt
    INNER JOIN users u ON upt.user_id = u._id
    INNER JOIN tags t ON upt.tags_id = t._id
    WHERE u.username = $1;
  `

  db.query(query, [username])
    .then((response) => {
      res.locals.pinnedTags = response.rows;
    })
    .catch((error) => next({
      error,
      log: `Error in tagsController getPinnedTags`,
    }));
}

tagsController.addNewTag = (req, res, next) => {
  // Create with req.body.tag 
  const { tag } = req.body

  const query = `
    INSERT INTO tags (name) 
    VALUES ($1)
    ON CONFLICT DO NOTHING;
  `

  db.query(query, [tag])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in tagsController addNewTag`,
    }));
}

tagsController.addTagToResource = (req, res, next) => {
  // Create with req.body.tagName and req.body.resourceId
  const { tag, resourceId } = req.body;
  if (!tag || !resourceId) {
    return res.status(400).send('bad request, need tag and resourceId in body');
  }

  const query = `
    INSERT INTO tagged_resources (resource_id, tags_id)
    VALUES ($1, (SELECT _id FROM tags WHERE name=$2));
  `

  db.query(query, [resourceId, tag])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in tagsController addTagToResource`,
    }));
  
}

tagsController.removeTagFromResource = (req, res, next) => {
  // Delete with req.query.tagId and req.query.resourceId
  const { resourceId } = req.query;
  const { tag } = req.params;
  if (!tag || !resourceId) {
    return res.status(400).send('bad requets, needs tag param and resourceId query param');
  }

  const query = `
    DELETE FROM tagged_resources 
    WHERE tags_id = (SELECT _id FROM tags WHERE name = $1)
    AND resource_id = $2;
  `
  
  db.query(query, [tag, resourceId])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in tagsController removeTagFromResource`,
    }));
};

tagsController.pinTag = (req, res, next) => {
  let username;
  const { tag } = req.params;

  const query = `
    INSERT INTO user_pinned_tags (user_id, tags_id)
      VALUES (
        (SELECT _id FROM users WHERE username=$1),
        (SELECT _id FROM tags WHERE name=$2)
      )
      ON CONFLICT DO NOTHING;
  `;

  db.query(query, [username, tag])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in tagsController pinTag`,
    }));
};

tagsController.unpinTag = (req, res, next) => {
  let username;
  const { tag } = req.params;

  const query = `
    DELETE FROM user_pinned_tags
      WHERE user_id = (SELECT _id FROM users WHERE username = $1)
      AND tag_id = (SELECT _id FROM tags WHERE name=$2);
  `;

  db.query(query, [username, tag])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in tagsController pinTag`,
    }));
};

module.exports = tagsController; 