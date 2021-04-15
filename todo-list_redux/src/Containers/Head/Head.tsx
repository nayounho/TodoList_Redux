import StyledTitle from 'Components/Title/Title.styled';

type HeadProps = {
  className?: string;
};

const Head = ({ className }: HeadProps) => {
  return (
    <StyledTitle className={className} level={1}>
      TODO LIST
    </StyledTitle>
  );
};

export default Head;
