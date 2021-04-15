import Head from 'Containers/Head/Head';
import InputText from 'Containers/Input/InputText';
import InputButton from 'Containers/InputButton/InputButton';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';
import { createContentAction } from 'redux/newTodosReducer';
import { updataAction } from 'redux/todosReducer';
import { Todo, Todos } from 'type';

const Header = () => {
  const newTodo = useSelector((state: CombinedState<{ newTodo: Todo }>) => state.newTodo);
  const todos = useSelector((state: CombinedState<{ todos: Todos }>) => state.todos);
  const dispatch = useDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(createContentAction(e.target.value));
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (newTodo.content === '') return;
    dispatch(updataAction(newTodo.content));
  };

  return (
    <header>
      <Head />
      <InputText onChange={onChange} />
      <InputButton onClick={onClick} />
    </header>
  );
};

export default Header;
