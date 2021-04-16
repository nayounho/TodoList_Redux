import { ChangeEventHandler, MouseEventHandler } from 'react';

type InputStyled = {
  className?: string;
  type?: 'text' | 'checkbox' | 'radio';
  id: string;
  name: string;
  setContent?: any;
  onChange?: ChangeEventHandler;
  completed?: boolean;
};

const Input = ({ className, type, id, name, onChange, completed }: InputStyled) => {
  return (
    <>
      <input
        id={id}
        name={name}
        className={className}
        type={type}
        onChange={onChange}
        checked={completed}
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
