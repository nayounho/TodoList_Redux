import Input from 'Components/Input/Input';
import TodoCounter from 'Containers/TodoCounter/TodoCounter';

const Footer = () => {
  return (
    <footer>
      <Input type='checkbox' id='1' name='All Checked' />
      <TodoCounter />
    </footer>
  );
};

export default Footer;
