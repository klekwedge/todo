import "./ToggleTheme.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ToggleTheme(props) {
  return (
    <>
      <div className="toggle">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox"
          onClick={() => props.setCurrentTheme("dark")}
        />
        <label htmlFor="checkbox" className="label">
        <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faSun} />
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
}

export default ToggleTheme;
