import { combineReducers, createStore } from 'redux';
import { todosReducer } from '../redux/todosReducer';
import testReducer from '../redux/testReducer';
import { newTodoReducer } from './newTodosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  test: testReducer,
  newTodo: newTodoReducer
});

const store = createStore(rootReducer);

export default store;
