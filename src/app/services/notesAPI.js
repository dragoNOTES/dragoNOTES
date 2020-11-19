import { connect } from '../../server/routes/api';
import { wait, createNote } from '../utils';

export default {
  async fetchByResource(id) {
    fetch(`/api/notes?resourceId=${id}`, {
      method: 'GET', 
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.resourceNotes 
      })
  },
  async create({ resourceId, content }) {
    fetch('/api/notes', {
      method: 'POST', 
      body: JSON.stringify({
        resourceId,
        noteBody: content,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.note 
      })  
  },
  async fetchByID(id) {
    fetch(`/api/notes/${id}`, {
      method: 'GET', 
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => { return response.json() })
      .then(data => {
        return data.note 
      })
  },

  async pinByID(id) {
    fetch(`/api/notes/pinned/${id}`, {
      method: 'POST', 
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })    
  },

  async unpinByID(id) {
    fetch(`/api/notes/pinned/${id}`, {
      method: 'DELETE', 
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      }
    })    
  },
};
