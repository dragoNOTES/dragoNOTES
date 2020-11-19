export default {
  async fetchAll() {
    // TODO: fill with actual fetch request from api MJ -> Is this correct?
    let res = await fetch('/api/tags');
    res = await res.json();
    return res;
  }

  async create({ name }) {
    // TODO: fill with actual fetch request from api
    return fetch('/api/tags', {
      method: 'POST',
      body: JSON.stringify({
        tag: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  async pinByID(id) {
    // TODO: add a tag to the currently logged in user's pinned tags by it's id
    return fetch(`/api/tags/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // await wait(500);
    // return createTag({ name, _id: id });
  },
};
