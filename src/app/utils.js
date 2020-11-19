export const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const createTag = ({ name, _id }) => ({
  name,
  _id: _id ?? ~~(Math.random() * 10 ** 6),
});

export const createResource = ({ title, url, tags, _id }) => ({
  title,
  url,
  tags,
  _id: _id ?? ~~(Math.random() * 10 ** 6),
});

export const createNote = ({
  resourceID,
  content,
  _id,
  owner_id,
  created_at,
}) => ({
  resourceID,
  created_at: created_at || new Date(),
  content,
  owner_id: owner_id || 5436278,
  _id: _id ?? ~~(Math.random() * 10 ** 6),
});
