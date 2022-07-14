import "./ToggleTheme.scss";
import { useRef, useState } from 'react';

function ToggleTheme() {
  const [isThemeDark, setIsThemeDark] = useState('false')
  const shapeEl = useRef();

  function toggleTheme() {
    setIsThemeDark(!isThemeDark)
    const replacedClass = isThemeDark ? "moon" : "sun";
    const replacedWithClass = isThemeDark ? "sun" : "moon";
    shapeEl.current.classList.replace(replacedClass, replacedWithClass);
    document.body.classList.toggle('dark')
  }

  return (
    <>
      <button className="theme-toggle--button theme__button" onClick={toggleTheme}>
        <span className="shape moon" ref={shapeEl}></span>
        <span className="rays--container">
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
        </span>
      </button>
    </>
  );
}

export default ToggleTheme;
