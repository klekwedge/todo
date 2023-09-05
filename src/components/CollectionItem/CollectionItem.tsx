import { BsFillTrashFill, BsPencilFill, BsThreeDots } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { createStyles, rem, ActionIcon, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NewCollection from '../NewCollection/NewCollection';
import { useAppDispatch } from '../../hooks/useRedux';
import { ICollection } from '../../types/types';
import { deleteCollection } from '../../slices/tasksSlice';

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
  const dispatch = useAppDispatch();
  const [opened, { open, close }] = useDisclosure(false);

  console.log(collection);

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
          <Menu.Item icon={<BsPencilFill size="1rem" />} onClick={open}>
            Edit
          </Menu.Item>
          <Menu.Item icon={<BsFillTrashFill size="1rem" />} onClick={() => dispatch(deleteCollection(collection.id))}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <NewCollection
        opened={opened}
        close={close}
        title="Edit collection"
        icon={collection.icon}
        color={collection.color}
        name={collection.name}
        id={collection.id}
      />
    </NavLink>
  );
}

export default CollectionItem;
