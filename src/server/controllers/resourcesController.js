const db = require('../models/dragoNotesModel');

const resourcesController = {};

resourcesController.addResources = (req, res, next) => {
  // Update with req.body.link,  req.body.title, req.body.ownerId
  const { link, title } = req.body;
  const { username } = res.locals;

  const query = `
    INSERT INTO resources (link, title, owner_id)
    VALUES ($1, $2, (SELECT _id FROM users WHERE username = $3))
    ON CONFLICT DO NOTHING
    RETURNING link, title, _id;
  `;

  db.query(query, [link, title, username])
    .then((response) => {
      res.locals.resource = response.rows[0];
      return next()
    })
    .catch((error) => next({
      error,
      log: `Error in resourceController addResource`,
    }));
}

resourcesController.getResource = (req, res, next) => {
  // Retrieve with req.params.resourceId
  const { resourceId } = req.params;

  const query = `SELECT * FROM resources WHERE _id=$1`

  db.query(query, [resourceId])
    .then((response) => {
      res.locals.resource = response.rows[0];
      return next()
    })
    .catch((error) => next({
      error,
      log: `Error in resourceController getResource`,
    }));
}

resourcesController.getPageResources = (req, res, next) => {
  // need to explore this a bit more....
  const { tag, page } = req.query;
  if (!tag || !page) {
    return res.status(400).send('bad request, need tag and page query params');
  }
  
  const PAGE_AMOUNT = 100;
  const offset = page * PAGE_AMOUNT;

  const query = `
    SELECT link, title, t.name AS tag_name, r.created_at, num_notes, num_pinned, r._id AS id
    FROM tagged_resources tr
    INNER JOIN tags t ON tr.tags_id = t._id
    INNER JOIN resources r ON tr.resource_id = r._id
    WHERE t.name = $1
    ORDER BY r.created_at 
    OFFSET $2 LIMIT $3;
  `;

  db.query(query, [tag, offset, PAGE_AMOUNT])
    .then((response) => {
      res.locals.pageResources = response.rows;
      return next()
    })
    .catch((error) => next({
      error,
      log: `Error in resourceController getResource`,
    }));
}

resourcesController.getPinnedResources = (req, res, next) => {
  // retrieve with req.params.resourceId
  const { username } = res.locals;

  const query = `
    SELECT link, title, r._id AS id FROM user_pinned_resources upr
    INNER JOIN users u ON upr.user_id = u._id
    INNER JOIN resources r ON upr.resource_id = r._id
    WHERE u.username = $1;
  `;

  db.query(query, [username])
    .then((response) => {
      res.locals.pinnedResources = response.rows;
      return next();
    })
    .catch((error) => next({
      error,
      log: `Error in resourceController getPinnedResources`,
    }));
}

// resourcesController.getTaggedResources = (req, res, next) => {
//   // retrieve with req.query.tag
// }

resourcesController.getOwnedResources = (req, res, next) => {
  // retrieve with req.params.username
  const { username } = res.locals;

  const query = `
    SELECT * FROM resources 
    WHERE owner_id = (SELECT _id FROM users WHERE username = $1);
  `;

  db.query(query, [username])
    .then((response) => {
      res.locals.ownedResources = response.rows;
      return next()
    })
    .catch((error) => next({
      error,
      log: `Error in resourceController getOwnedResources`,
    }));
}

resourcesController.pinResource = (req, res, next) => {
  // retrieve with req.params.username
  const { username } = res.locals;
  const { resourceId } = req.params;

  const query = `
    INSERT INTO user_pinned_resources (user_id, resource_id)
    VALUES ((SELECT _id FROM users WHERE username=$1), $2)
    ON CONFLICT DO NOTHING;
  `;

  db.query(query, [username, resourceId])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in resourceController pinResource`,
    }));
}

resourcesController.unpinResource = (req, res, next) => {
  const { username } = res.locals;
  const { resourceId } = req.params;

  const query = `
    DELETE FROM user_pinned_resources
    WHERE user_id = (SELECT _id FROM users WHERE username = $1)
    AND resource_id = $2;
  `;

  db.query(query, [username, resourceId])
    .then(() => next())
    .catch((error) => next({
      error,
      log: `Error in resourcesController unpinResource`,
    }));
};

// resourcesController.updateRedource = () => {
//   // update with req.params.resourceId
// }

module.exports = resourcesController; 