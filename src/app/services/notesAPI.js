export default {
  async fetchByResource(id) {
    return fetch(`/api/notes?resourceId=${id}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.resourceNotes;
      });
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
    return fetch(`/api/notes/${id}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.note;
      });
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
