export default {
  async fetchByResource(id) {
    const res = await fetch(`/api/notes?resourceId=${id}`);
    const data = await res.json();
    return data.resourceNotes;
  },

  async create({ resourceId, content }) {
    return fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        resourceId,
        noteBody: content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.note;
      });
  },
  async fetchByID(id) {
    const res = await fetch(`/api/notes/${id}`);
    const data = await res.json();
    return data.note;
  },

  async pinByID(id) {
    return fetch(`/api/notes/pinned/${id}`, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  async unpinByID(id) {
    fetch(`/api/notes/pinned/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
