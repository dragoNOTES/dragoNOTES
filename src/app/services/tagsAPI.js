import { wait, createTag } from '../utils';

export default {
  async fetchAll() {
    // TODO: fill with actual fetch request from api
    await wait(500);
    return [
      createTag({ name: 'redux' }),
      createTag({ name: 'react' }),
      createTag({ name: 'async' }),
    ];
  },

  async create({ name }) {
    // TODO: fill with actual fetch request from api
    await wait(500);
    return createTag({ name });
  },

  async pinByID(id) {
    // TODO: add a tag to the currently logged in user's pinned tags by it's id
    await wait(500);
    return createTag({ name, _id: id });
  },
};
