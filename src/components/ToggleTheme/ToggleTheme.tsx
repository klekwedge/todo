import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import './ToggleTheme.scss';
import { useEffect } from 'react';

function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (colorScheme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [colorScheme]);

  return (
    <ActionIcon variant="transparent" onClick={() => toggleColorScheme()} title="Toggle color scheme" w="35px" h="35px">
      {colorScheme === 'dark' ? <BsSunFill size="65%" /> : <BsMoonFill size="65%" />}
    </ActionIcon>
  );
}

export default ToggleTheme;
