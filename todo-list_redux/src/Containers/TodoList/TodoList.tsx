import ListItem from 'Containers/ListItem/ListItem';
import { useSelector } from 'react-redux';
import { Todo } from 'type';

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <ListItem key={todo.id} id={todo.id + ''} name={todo.content}></ListItem>
      ))}
    </ul>
  );
};

export default TodoList;
