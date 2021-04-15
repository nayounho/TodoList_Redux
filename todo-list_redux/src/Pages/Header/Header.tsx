import Head from 'Containers/Head/Head';
import InputText from 'Containers/Input/InputText';
import InputButton from 'Containers/InputButton/InputButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CombinedState } from 'redux';
import { Todos } from 'type';

const Header = () => {
  const todos = useSelector((state: CombinedState<{ todos: Todos }>) => state.todos);

  return (
    <header>
      <Head />
      <InputText />
      <InputButton />
    </header>
  );
};

export default Header;
