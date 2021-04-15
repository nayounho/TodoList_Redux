type ParagraphProps = {
  className?: string;
  children: string;
};

const Paragraph = ({ className, children }: ParagraphProps) => {
  return <p className={className}>{children}</p>;
};

export default Paragraph;
