import StyledInput from 'Components/Input/InputText.styled';

type InputTextProps = {
  className?: string;
};

const InputText = ({ className }: InputTextProps) => {
  return (
    <StyledInput name='list를 입력해주세요' id='1' className={className} type='text'></StyledInput>
  );
};

export default InputText;
