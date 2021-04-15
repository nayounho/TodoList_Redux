type ButtonProps = {
  className?: string;
  children: string;
  type?: 'button' | 'submit';
};

const Button = ({ className, children, type }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
