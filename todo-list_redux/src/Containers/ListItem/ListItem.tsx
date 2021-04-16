import Button from 'Components/Button/Button';
import Input from 'Components/Input/Input';
import List from 'Components/List/List';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from 'redux/todosReducer';

type listItemProps = {
  id: string;
  name: string;
  completed: boolean;
  onChange: ChangeEventHandler;
};

const ListItem = ({ id, name, completed, onChange }: listItemProps) => {
  const dispatch = useDispatch();

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (e.currentTarget.parentElement) dispatch(deleteList(+e.currentTarget.parentElement.id));
  };

  return (
    <List id={id}>
      <Input name={name} id={id} type='checkbox' completed={completed} onChange={onChange} />
      <Button onClick={onClick}>X</Button>
    </List>
  );
};

export default ListItem;
