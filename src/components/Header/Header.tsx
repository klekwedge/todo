import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import './Header.scss';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <Flex justifyContent="flex-end" gap="40px" alignItems="center">
        <Flex gap="10px" alignItems="center">
          {children}
        </Flex>
      </Flex>
    </header>
  );
}

export default Header;
