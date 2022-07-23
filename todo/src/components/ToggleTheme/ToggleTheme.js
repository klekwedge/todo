import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import "./ToggleTheme.scss";

function ToggleTheme() {
  const [isThemeDark, setIsThemeDark] = useState("false");
  const [lightTheme, setLightTheme] = useState(true);

  function changeTheme() {
    setLightTheme(!lightTheme);
    setIsThemeDark(!isThemeDark);
    document.body.classList.toggle("dark");
  }

  return (
    <IconButton
      icon={lightTheme ? <SunIcon /> : <MoonIcon />}
      borderRadius="50%"
      onClick={changeTheme}
    ></IconButton>
  );
}

export default ToggleTheme;
