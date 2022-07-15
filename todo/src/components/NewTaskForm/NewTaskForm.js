import { useState } from "react";
import "./NewTaskForm.scss";

function NewTaskForm({addTask}) {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="new-task">
        <input
          type="text"
          className="new-task__input"
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <label className="new-task__label">New task</label>
        <button
          type="button"
          className="new-task__button"
          onClick={() => addTask(input)}
        >
          Add item
        </button>
      </div>
    </>
  );
}

export default NewTaskForm;
