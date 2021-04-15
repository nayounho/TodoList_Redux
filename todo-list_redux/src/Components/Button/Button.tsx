import { MouseEventHandler, useEffect } from 'react';

type ButtonProps = {
  className?: string;
  children: string;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler;
};

const Button = ({ className, children, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
