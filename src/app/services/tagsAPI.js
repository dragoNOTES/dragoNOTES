export default {
  async fetchAll() {
    let res = await fetch('/api/tags');
    res = await res.json();
    return res.tags || [];
  },

  async create({ name }) {
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

  async addTagToResource(tagName, id) {
    const response = await fetch(`/api/tags/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  async pinByID(id) {
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
