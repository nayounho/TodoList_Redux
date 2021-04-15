type InputStyled = {
  className?: string;
  type?: 'text' | 'checkbox' | 'radio';
  id: string;
  name: string;
};

const Input = ({ className, type, id, name }: InputStyled) => {
  return (
    <>
      <input id={id} name={name} className={className} type={type} />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
