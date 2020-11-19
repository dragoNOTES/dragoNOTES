import { wait, createNote } from '../utils';

export default {
  async fetchData() {
    
    
    return [
      createNote({
        resourceID: id,
        content: 'Redux is awesome',
      }),
      createNote({
        resourceID: id,
        content: 'I like to use React',
      }),
    ];
  },
  async create({ resourceID, content }) {
    // TODO: create a new note on a given resource
    await wait(500);
    return createNote({ resourceID, content });
  },

};
