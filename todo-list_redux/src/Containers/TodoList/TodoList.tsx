import ListItem from 'Containers/ListItem/ListItem';
import data from 'data';
import { useEffect, useState } from 'react';
import { Todo, Todos } from 'type';

const TodoList = () => {
  const [todos, setTodos] = useState([] as Todos);

  useEffect(() => {
    setTodos(() => [...data]);
  }, [setTodos]);

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <ListItem key={todo.id} id={todo.id + ''} name={todo.content}></ListItem>
      ))}
    </ul>
  );
};

export default TodoList;
