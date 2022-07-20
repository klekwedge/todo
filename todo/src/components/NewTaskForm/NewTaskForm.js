import { useState } from "react";
import { Select, Stack } from "@chakra-ui/react";

import "./NewTaskForm.scss";

function NewTaskForm({ addTask }) {
  const [input, setInput] = useState("");
  const [optionCategory, setOptionCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input, optionCategory);
    setInput("");
    setOptionCategory("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form className="new-task" onSubmit={handleSubmit}>
        <div className="wrapper">
          <Select
            placeholder="Select category"
            onChange={(e) => setOptionCategory(e.target.value)}
            value={optionCategory}
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="other">Other</option>
          </Select>
        </div>

        <div className="wrapper">
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
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTaskForm;
