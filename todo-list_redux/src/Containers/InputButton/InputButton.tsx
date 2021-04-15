import Button from 'Components/Button/Button';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler;
};

const InputButton = ({ onClick }: ButtonProps) => {
  return <Button onClick={onClick}>ADD</Button>;
};

export default InputButton;
