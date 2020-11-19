import { wait, createResource, createTag } from '../utils';

export default {
  async create({ title, url, tags }) {
    // TODO: create a new resource with the given tags
    await wait(500);
    return createResource({ title, url, tags });
  },

  async fetchByID(id) {
    // TODO: return a resource by its id
    await wait(500);
    return createResource({
      title: 'Redux Toolkit - Advanced Tutorial',
      url: 'https://redux-toolkit.js.org/tutorials/advanced-tutorial',
      tags: [createTag({ name: 'redux' })],
      _id: id,
    });
  },

  async fetchPinned() {
    // TODO: return the currently logged in user's pinned resources
    await wait(500);
    return [
      createResource({
        title: 'Redux - Learn This Stuff',
        url: 'http://reduxiseasy.io/learn-this-stuff',
        tags: [createTag({ name: 'redux' })],
      }),
      createResource({
        title: 'Redux Toolkit - Advanced Tutorial',
        url: 'https://redux-toolkit.js.org/tutorials/advanced-tutorial',
        tags: [createTag({ name: 'redux' })],
      }),
    ];
  },

  async fetchByTags(tags) {
    // TODO: fetch resources with the given tags
    await wait(500);
    return [
      createResource({
        title: 'Redux - Learn This Stuff',
        url: 'http://reduxiseasy.io/learn-this-stuff',
        tags,
      }),
      createResource({
        title: 'Redux Toolkit - Advanced Tutorial',
        url: 'https://redux-toolkit.js.org/tutorials/advanced-tutorial',
        tags,
      }),
    ];
  },

  async deleteByID(id) {
    // TODO: delete a resource by its id
    await wait(500);
    return createResource({
      title: 'Redux Toolkit - Advanced Tutorial',
      url: 'https://redux-toolkit.js.org/tutorials/advanced-tutorial',
      tags: [createTag({ name: 'redux' })],
      _id: id,
    });
  },

  async pinByID(id) {
    // TODO: add a resource to the currently logged in user's pinned resources by it's id
    await wait(500);
    return createResource({
      title: 'Redux Toolkit - Advanced Tutorial',
      url: 'https://redux-toolkit.js.org/tutorials/advanced-tutorial',
      tags: [createTag({ name: 'redux' })],
      _id: id,
    });
  },
};
