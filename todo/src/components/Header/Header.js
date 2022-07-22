import {
  Flex,
  IconButton,
  Input,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./Header.scss";

function Header({ children }) {
  return (
    <header>
      <Flex justifyContent="space-between" gap="40px" alignItems="center">
        <Flex gap="5px" alignItems="center">
          <IconButton icon={<SearchIcon />} />
          <Input placeholder="Search task" />
        </Flex>
        <Flex justifyContent="flex-end" gap="10px" alignItems="center">
          {children}
          <Avatar>
            <AvatarBadge
              borderColor="papayawhip"
              bg="green.500"
              boxSize="1.25em"
            />
          </Avatar>
        </Flex>
      </Flex>
    </header>
  );
}

export default Header;
