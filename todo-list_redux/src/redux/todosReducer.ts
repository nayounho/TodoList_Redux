import todos from 'data';
import { Todos } from 'type';

type action = {
  type: string;
  payload?: any;
};

const initialState = todos;

const updataAction = (content: string) => {
  return { type: 'UPDATE', payload: content };
};
const changeCompletedAction = (id: number) => {
  return { type: 'CHANGECOMPLETED', payload: id };
};
const deleteList = (id: number) => {
  return { type: 'DELETE', payload: id };
};

const todosReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case 'CREATE':
      return [...action.payload];
    case 'UPDATE':
      return [
        ...state,
        {
          id: state.length === 0 ? 1 : Math.max(...state.map(todo => todo.id)) + 1,
          content: action.payload
        }
      ];
    case 'CHANGECOMPLETED':
      return state.map(todo =>
        action.payload === todo.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE':
      return state.filter(todo => action.payload !== todo.id);
    default:
      return state;
  }
};

export { todosReducer, updataAction, changeCompletedAction, deleteList };
