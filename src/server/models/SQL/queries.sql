--TO DO: 
--  update a note with time updated too
--  update numNotes and numPinned on resources when updated
--  delete a resource when it has no notes


-- insert user
INSERT INTO users (username, first_name, last_name) 
  VALUES ($1, $2, $3)
  ON CONFLICT DO NOTHING;

--  get user
SELECT * FROM users WHERE username=$1;

SELECT _id FROM users WHERE username=$1;

--------- TAGS

-- create tag
INSERT INTO tags (name) 
  VALUES ($1)
  ON CONFLICT DO NOTHING;

-- get a tag
SELECT * FROM tags WHERE name = $1;

-- get all tags
SELECT name FROM tags;

-- get user's pinned tags
SELECT name FROM user_pinned_tags upt
  INNER JOIN users u ON upt.user_id = u._id
  INNER JOIN tags t ON upt.tags_id = t._id
  WHERE u.username = $1;

-- pin a tag
INSERT INTO user_pinned_tags (user_id, tags_id)
  VALUES (
    (SELECT _id FROM users WHERE username=$1),
    (SELECT _id FROM tags WHERE name=$2)
  )
  ON CONFLICT DO NOTHING;

-- unpin a tag
DELETE FROM user_pinned_tags
  WHERE user_id = (SELECT _id FROM users WHERE username = $1)
  AND tag_id = (SELECT _id FROM tags WHERE name=$2);

-- delete orphaned tags
DELETE FROM tags t
  WHERE NOT EXISTS
  (SELECT 1 FROM tagged_resources tr WHERE tr.tags_id = t._id);

------ NOTES

-- create a note
INSERT INTO notes (content, owner_id, resource_id)
  VALUES ($1, $2, $3);

-- delete a note
DELETE FROM notes WHERE _id = $1;

-- get a note
SELECT * FROM notes WHERE _id = $1;

-- get all a resource's notes
SELECT * FROM notes WHERE resource_id=$1;

-- get all owner's notes
SELECT * FROM notes WHERE owner_id=$1;

-- get user's pinned notes
SELECT * FROM user_pinned_notes upn
  INNER JOIN users u ON upn.user_id = u._id
  INNER JOIN notes n ON upn.notes_id = n._id
  WHERE u.username = $1;

-- pin a note
INSERT INTO user_pinned_notes (user_id, notes_id)
  VALUES ((SELECT _id FROM users WHERE username=$1), $2)
  ON CONFLICT DO NOTHING;

-- unpin a note
DELETE FROM user_pinned_notes
  WHERE user_id = (SELECT _id FROM users WHERE username = $1)
  AND notes_id = $2;


--------- RESOURCES

-- add a resource
INSERT INTO resources (link, title, owner_id)
  VALUES ($1, $2, $3);

INSERT INTO resources (link, title, owner_id, num_notes, num_pinned)
  VALUES ($1, $2, $3, $4, $5);

-- get a single resource
SELECT * FROM resources WHERE _id=$1

-- tag a resource
INSERT INTO tagged_resources (resource_id, tags_id)
  VALUES ($1, (SELECT _id FROM tags WHERE name=$2));

-- untag a resource
DELETE FROM tagged_resources 
  WHERE tags_id = (SELECT _id FROM tags WHERE name = $1)
  AND resource_id = $2;

-- get paginated resources by tag
SELECT * FROM tagged_resources tr
  INNER JOIN tags t ON tr.tags_id = t._id
  INNER JOIN resources r ON tr.resource_id = r._id
  WHERE t.name = $1
  ORDER BY r.created_at 
  OFFSET $2 LIMIT 10;

-- get user's pinned resources
SELECT * FROM user_pinned_resources upr
  INNER JOIN users u ON upr.user_id = u._id
  INNER JOIN resources r ON upr.resource_id = r._id
  WHERE u.username = $1;

-- pin a resource
INSERT INTO user_pinned_resources (user_id, resource_id)
  VALUES ((SELECT _id FROM users WHERE username=$1), $2);
  ON CONFLICT DO NOTHING;

-- unpin a resource
DELETE FROM user_pinned_resources
  WHERE user_id = (SELECT _id FROM users WHERE username = $1)
  AND resource_id = $2;

-- increment a resource's num_pinned
UPDATE resources 
  SET num_pinned = num_pinned + 1
  WHERE _id=$1

-- decrement a resource's num_pinned
UPDATE resources
  SET num_pinned = CASE WHEN num_pinned < 1 THEN 0 ELSE num_pinned - 1 END
  WHERE _id=$1

-- increment a resource's num_notes
UPDATE resources 
  SET num_notes = num_notes + 1
  WHERE _id=$1

-- decrement a resource's num_notes
UPDATE resources
  SET num_notes = CASE WHEN num_notes < 1 THEN 0 ELSE num_notes - 1 END
  WHERE _id=$1
