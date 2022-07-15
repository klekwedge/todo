import { useState } from "react";
import "./NewTaskForm.scss";

function NewTaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form className="new-task" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-task__input"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <label className="new-task__label">New task</label>
        <button type="submit" className="new-task__button">
          Add item
        </button>
      </form>
    </>
  );
}

export default NewTaskForm;
