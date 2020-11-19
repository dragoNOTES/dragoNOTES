
export default {
  async create({ title, url, tags }) {
    //MJ: currently not using tags no backend funcitonality
    fetch('/api/resources', {
      method: 'POST', 
      body: JSON.stringify({ 
        title,
        link: url,
        tags,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.resources 
      })
  },

  async fetchByID(id) {
    fetch(`/api/resources/${id}`, {
      method: 'GET', 
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.resource 
      })
  },

  async fetchPinned() {
    fetch('/api/resources/pinned', {
      method: 'GET', 
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.pinnedResources 
      })
  },

  async fetchByTags(tag, page = 0) {
    fetch(`/api/resources?tag=${tag}&page=${page}`, {
      method: 'GET', 
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.resources 
      })
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
    fetch(`/api/resources/pinned/${id}`, {
      method: 'POST', 
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  },
};
