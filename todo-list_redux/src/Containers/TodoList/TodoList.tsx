import ListItem from 'Containers/ListItem/ListItem';
import todos from 'data';
import { useEffect } from 'react';

const TodoList = () => {
  useEffect(() => {
    console.log(todos);
  });

  return (
    <ul>
      {todos.map(todo => (
        <ListItem key={todo.id} id={todo.id + ''} name={todo.content}></ListItem>
      ))}
    </ul>
  );
};

export default TodoList;
