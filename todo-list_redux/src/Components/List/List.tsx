type ListProps = {
  className?: string;
  children: React.ReactNode;
  id: string;
};

const List = ({ className, children, id }: ListProps) => {
  return (
    <li className={className} id={id}>
      {children}
    </li>
  );
};

export default List;
