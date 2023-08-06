import { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import './ToggleTheme.scss';

function ToggleTheme() {
  const [isLightTheme, seIsLightTheme] = useState(true);

  function changeTheme() {
    seIsLightTheme((currentValue) => !currentValue);
    document.body.classList.toggle('dark');
  }

  return <IconButton icon={isLightTheme ? <SunIcon /> : <MoonIcon />} borderRadius="50%" onClick={changeTheme} aria-label={''} />;
}

export default ToggleTheme;
