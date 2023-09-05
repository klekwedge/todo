import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import './ToggleTheme.scss';

function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant='transparent'
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      w="35px"
      h="35px"
    >
      {colorScheme === 'dark' ? <BsSunFill size="65%" /> : <BsMoonFill size="65%" />}
    </ActionIcon>
  );
}

export default ToggleTheme;
