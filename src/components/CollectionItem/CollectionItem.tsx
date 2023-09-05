import { BsListUl, BsArrowRepeat, BsPlus, BsFillTrashFill, BsPencilFill, BsThreeDots } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import {
  createStyles,
  Navbar,
  UnstyledButton,
  rem,
  Group,
  Text,
  Tooltip,
  ActionIcon,
  Avatar,
  Table,
  Menu,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NewCollection from '../NewCollection/NewCollection';
import { useAppSelector } from '../../hooks/useRedux';
import { ICollection } from '../../types/types';

const useStyles = createStyles((theme) => ({
  collections: {
    paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
    paddingRight: theme.spacing.md,
    marginBottom: rem(5),
  },

  collectionLink: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${rem(8)} ${theme.spacing.xs}`,
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));

interface CollectionItemProps {
  collection: ICollection;
}

function CollectionItem({ collection }: CollectionItemProps) {
  const { classes } = useStyles();

  return (
    <NavLink to={`/${collection.name}`} key={collection.name} className={classes.collectionLink}>
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.icon} {collection.name}
      </span>
      <Menu transitionProps={{ transition: 'pop' }} withArrow position="bottom-end" withinPortal>
        <Menu.Target>
          <ActionIcon>
            <BsThreeDots size="1rem" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<BsPencilFill size="1rem" />}>Edit</Menu.Item>
          <Menu.Item icon={<BsFillTrashFill size="1rem" />}>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </NavLink>
  );
}

export default CollectionItem;
