import { useState } from "react";
import "./NewTask.scss";

function Newitem(props) {
  const [input, setInput] = useState("");

  return (
    <div className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={() => props.updateList(input)}>
        Add item
      </button>
    </div>
  );
}

export default Newitem;
