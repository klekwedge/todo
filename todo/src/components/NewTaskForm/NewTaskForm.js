import { useState } from "react";
import { Select, Input } from "@chakra-ui/react";

import "./NewTaskForm.scss";

function NewTaskForm({ addTask }) {
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [optionCategory, setOptionCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskNameInput, optionCategory, taskDescription);
    setTaskNameInput("");
    setOptionCategory("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const test = (e) => {
    console.log(e);
  };

  return (
    <>
      <form className="new-task" onSubmit={handleSubmit}>
        <div className="wrapper">
          <input
            type="text"
            className="new-task__input"
            value={taskNameInput}
            required
            onChange={(e) => setTaskNameInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <label className="new-task__label">New task</label>
          <button type="submit" className="new-task__button">
            Add
          </button>
        </div>

        <div className="wrapper">
          <Input
            placeholder="What do you need to do?"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            // onKeyDown={handleKeyPress}
          />
          <label className="new-task__descr">Description</label>
        </div>

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
      </form>
    </>
  );
}

export default NewTaskForm;
