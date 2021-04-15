import { Todos } from 'type';

const initialState = [] as Todos;

const updataAction = (content: string) => {
  return { type: 'UPDATE', payload: content };
};

const todosReducer = (state = initialState, action: any) => {
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
    default:
      return state;
  }
};

export { todosReducer, updataAction };
