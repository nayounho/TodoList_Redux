import { ChangeEventHandler } from 'react';

type InputStyled = {
  className?: string;
  type?: 'text' | 'checkbox' | 'radio';
  id: string;
  name: string;
  setContent?: any;
  onChange?: ChangeEventHandler;
};

const Input = ({ className, type, id, name, onChange }: InputStyled) => {
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
