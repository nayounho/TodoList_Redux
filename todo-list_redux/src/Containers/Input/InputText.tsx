import StyledInput from 'Components/Input/InputText.styled';
import { ChangeEventHandler } from 'react';

type InputTextProps = {
  className?: string;
  onChange?: ChangeEventHandler;
};

const InputText = ({ className, onChange }: InputTextProps) => {
  return (
    <StyledInput
      onChange={onChange}
      name='list를 입력해주세요'
      id='1'
      className={className}
      type='text'
    ></StyledInput>
  );
};

export default InputText;
