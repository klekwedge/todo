import { ReactNode } from 'react';
import { Flex } from '@mantine/core';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import './Header.scss';

function Header() {


  return (
    <header className="header">
      <Flex gap="10px" justify='flex-end'>
        <NewTaskForm />
                <ToggleTheme />
      </Flex>
    </header>
  );
}

export default Header;
