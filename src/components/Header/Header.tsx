import { ReactNode } from "react";
import { Flex, IconButton, Input, Avatar, AvatarBadge } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./Header.scss";

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <Flex justifyContent="space-between" gap="40px" alignItems="center">
        <Flex gap="5px" alignItems="center">
          {/* <IconButton icon={<SearchIcon />} aria-label={""} />
          <Input placeholder="Search task" /> */}
        </Flex>
        <Flex justifyContent="flex-end" gap="10px" alignItems="center">
          {children}
          {/* <Avatar width="40px" height="40px">
            <AvatarBadge
              borderColor="papayawhip"
              bg="green.500"
              boxSize="1.10em"
            />
          </Avatar> */}
        </Flex>
      </Flex>
    </header>
  );
}

export default Header;
