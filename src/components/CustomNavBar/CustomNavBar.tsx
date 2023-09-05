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
import CollectionItem from '../CollectionItem/CollectionItem';

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.lg,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

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
    display: 'block',
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

const links = [
  { icon: BsListUl, label: 'Tasks' },
  { icon: BsArrowRepeat, label: 'Habits' },
];

function CustomNavBar() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { collections } = useAppSelector((state) => state.tasks);

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={25} className={classes.mainLinkIcon} />
        <span>{link.label}</span>
      </div>
    </UnstyledButton>
  ));

  return (
    <Navbar width={{ sm: 300 }} zIndex="0" p="md" className={classes.navbar}>
      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>
      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size='md' weight={500} color="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="left">
            <ActionIcon variant="default" size={22} onClick={open}>
              <BsPlus />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>
          {collections.map((collection) => (
            <CollectionItem key={collection.id} collection={collection} />
          ))}
        </div>
      </Navbar.Section>
      <NewCollection opened={opened} close={close} title='Create New collection'/>
    </Navbar>
  );
}

export default CustomNavBar;
