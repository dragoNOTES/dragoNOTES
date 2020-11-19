export default {
  async create({ title, url, tags }) {
    //MJ: currently not using tags no backend funcitonality
    const res = await fetch('/api/resources', {
      method: 'POST',
      body: JSON.stringify({
        title,
        link: url,
        tags,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();  
    return data.resources;
  },

  async fetchByID(id) {
    const res = await fetch(`/api/resources/${id}`);
    const data = await res.json();  
    return data.resource;
  },

  async fetchPinned() {
    const res = await fetch('/api/resources/pinned');
    const data = await res.json();
    return data.pinnedResources;
  },

  async fetchByTag({ tagName, page = 0 }) {
    return fetch(`/api/resources?tag=${tagName}&page=${page}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.resources;
      });
  },

  // async deleteByID(id) {
  //   fetch(`/api/resources/${id}`, {
  //     method: 'DELETE',
  //     body: JSON.stringify({}),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  // },

  async pinByID(id) {
    return fetch(`/api/resources/pinned/${id}`, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
