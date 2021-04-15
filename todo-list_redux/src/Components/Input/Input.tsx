import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CombinedState } from 'redux';
import { createContentAction, createIdAction } from 'redux/newTodosReducer';
import { Todo } from 'type';

type InputStyled = {
  className?: string;
  type?: 'text' | 'checkbox' | 'radio';
  id: string;
  name: string;
  setContent?: any;
};

const Input = ({ className, type, id, name }: InputStyled) => {
  const newTodo = useSelector((state: CombinedState<{ newTodo: Todo }>) => state.newTodo);
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(createContentAction(e.target.value));
    dispatch(createIdAction(e.target.value));
    console.log(newTodo);
  };
  //
  return (
    <>
      <input id={id} name={name} className={className} type={type} onChange={onChange} />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
