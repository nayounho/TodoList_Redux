import { createStore } from 'redux';
import todosReducer from '../redux/todosReducer';
const store = createStore(todosReducer);

export default store;
