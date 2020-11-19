import { wait, createNote } from '../utils';

export default {
  async fetchByResource(id) {
    // TODO: return all notes associated with the given resource id
    await wait(500);
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
  async fetchByID(id) {
    // TODO: return a note by its id
    await wait(500);
    return createNote({
      resourceID: 1,
      content: 'Redux is awesome',
      _id: id,
    });
  },
  async deleteByID(id) {
    // TODO: delete a note by its id
    await wait(500);
    return createNote({
      resourceID: 1,
      content: 'Redux is awesome',
      _id: id,
    });
  },
  async pinByID(id) {
    // TODO: add a note to the currently logged in user's pinned notes by it's id
    await wait(500);
    return createNote({
      resourceID: 1,
      content: 'Redux is awesome',
      _id: id,
    });
  },
};
