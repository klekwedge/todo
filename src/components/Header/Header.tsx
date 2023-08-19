import { ReactNode } from 'react';
import { Flex } from '@mantine/core';
import './Header.scss';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <Flex gap="10px" justify='flex-end'>
        {children}
      </Flex>
    </header>
  );
}

export default Header;
