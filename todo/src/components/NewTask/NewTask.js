import { useState } from "react";
import "./NewTask.scss";

function Newitem(props) {
  const [input, setInput] = useState("");

  return (
    <>
      {/* <div className="form">
        <label className="form__label" htmlFor="newitem">
          Add to the todo list
        </label>
        <input
          className="form__input"
          type="text"
          id="newitem"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="form__button"
          type="button"
          onClick={() => props.updateList(input)}
        >
          Add item
        </button>
      </div> */}

      <div className="new-task">
        <input type="text" className="new-task__input" required onChange={(e) => setInput(e.target.value)}/>
        <label className="new-task__label">New task</label>
        <button
          type="button"
          className="new-task__button"
          onClick={() => props.updateList(input)}
        >
          Add item
        </button>
      </div>
    </>
  );
}

export default Newitem;
