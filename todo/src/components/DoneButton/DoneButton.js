import "./DoneButton.scss";
import { useRef, useState } from "react";

function DoneButton() {
  return (
    <>
      <div className="label__wrapper">
        <input type="checkbox" id="_checkbox" />
        <label htmlFor="_checkbox" className="label__check">
          <div id="tick_mark"></div>
        </label>
      </div>
    </>
  );
}

export default DoneButton;
