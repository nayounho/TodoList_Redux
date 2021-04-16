import ListItem from 'Containers/ListItem/ListItem';
import { ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompletedAction } from 'redux/todosReducer';
import { Todo } from 'type';

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);

  const dispatch = useDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(changeCompletedAction(+e.target.id));
  };

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <ListItem
          key={todo.id}
          id={todo.id + ''}
          name={todo.content}
          completed={todo.completed}
          onChange={onChange}
        ></ListItem>
      ))}
    </ul>
  );
};

export default TodoList;
