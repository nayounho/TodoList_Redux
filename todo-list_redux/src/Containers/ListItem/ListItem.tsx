import Button from 'Components/Button/Button';
import Input from 'Components/Input/Input';
import List from 'Components/List/List';

type listItemProps = {
  id: string;
  name: string;
};

const ListItem = ({ id, name }: listItemProps) => {
  return (
    <List id={id}>
      <Input name={name} id={id} type='checkbox' />
      <Button>X</Button>
    </List>
  );
};

export default ListItem;
