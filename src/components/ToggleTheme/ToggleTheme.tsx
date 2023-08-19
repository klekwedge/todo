import { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import './ToggleTheme.scss';

function ToggleTheme() {
  const [isLightTheme, seIsLightTheme] = useState(true);

  function changeTheme() {
    // seIsLightTheme((currentValue) => !currentValue);
    // document.body.classList.toggle('dark');
  }

  return (
    <ActionIcon  size="2.5rem" radius="50%" onClick={() => changeTheme()}>
      {isLightTheme ? <BsSunFill size='20px'/> : <BsMoonFill  size='20px'/>}
    </ActionIcon>
  );
}

export default ToggleTheme;
