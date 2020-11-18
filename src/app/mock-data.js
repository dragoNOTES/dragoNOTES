export const myResources = generate(2, () => ({
  title: 'Redux - Learn This Stuff',
  url: 'http://reduxiseasy.io/learn-this-stuff',
  tags: ['redux', 'react', 'async'],
}));

export const otherResources = generate(10, () => ({
  title: 'Redux - Learn This Stuff',
  url: 'http://reduxiseasy.io/learn-this-stuff',
  tags: ['redux', 'react', 'async'],
}));

export const notes = generate(2, () => ({
  updatedAt: Date.now(),
  content: `
## Async Actions
- *They are pretty nice!*
- We like them.
- You need to use [Redux Thunk Middleware](https://github.com/reduxjs/redux-thunk)


It let's you do stuff like this:

\`\`\`js
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with \`dispatch\`
      dispatch(increment());
    }, 1000);
  };
}
\`\`\``,
}));

function generate(count, producer, withId = true) {
  const arr = [];
  for (let i = 0; i < count; i++)
    arr.push({
      ...producer(i),
      ...(withId ? { _id: ~~(Math.random() * 10 ** 6) } : {}),
    });
  return arr;
}
