const initialState = {
  id: 0,
  content: '',
  complete: false
};

const createIdAction = (newId: number) => {
  return { type: 'NEWID', payload: newId };
};

const createContentAction = (newContent: string) => {
  return { type: 'NEWCONTENT', payload: newContent };
};

const newTodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'NEWID':
      return {
        ...state,
        id: action.payload
      };
    case 'NEWCONTENT':
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export { newTodoReducer, createIdAction, createContentAction };
