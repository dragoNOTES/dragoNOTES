import { wait, createNote } from '../utils';

export default {
  async fetchData() {
    const response = await fetch('/api/users');
    if (response.status === 401) {
      return {
        isLoggedIn: false,
      }
    }

    const userData = await response.json();
    userData.isLoggedIn = true;
    return userData;
  },

  async create({ resourceID, content }) {
    // TODO: create a new note on a given resource
    await wait(500);
    return createNote({ resourceID, content });
  },

};
