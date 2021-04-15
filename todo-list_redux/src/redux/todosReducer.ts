import { Todos } from 'type';

const initialState = [] as Todos;

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE':
      return [...action.payload];
    default:
      return state;
  }
};

export default todosReducer;
