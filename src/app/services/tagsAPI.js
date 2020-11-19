import { response } from 'express';
import { wait, createTag } from '../utils';

export default {
  async fetchAll() {
    // TODO: fill with actual fetch request from api MJ -> Is this correct?
    fetch('/api/tags', {
      method: 'GET', 
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.tags 
      })
  },

  async create({ name }) {
    // TODO: fill with actual fetch request from api
    fetch('/api/tags', {
      method: 'POST', 
      body: JSON.stringify({ 
        tag: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  },

  async pinByID(id) {
    // TODO: add a tag to the currently logged in user's pinned tags by it's id
    fetch(`/api/tags/${id}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // await wait(500);
    // return createTag({ name, _id: id });
  },
};
