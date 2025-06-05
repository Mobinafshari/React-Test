import createStore from 'react-constore';

const store = createStore({
  count: 0,
  user: { name: 'Guest', age: 25 },
  todos: [],
  theme: { main: 'Salam' },
});

export default store;
