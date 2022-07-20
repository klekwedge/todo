import { useState } from "react";
import { Select, Input, Flex } from "@chakra-ui/react";
// import DatePicker from "react-datepicker";
// import format from "date-fns/format";

import "react-datepicker/dist/react-datepicker.css";
import "./NewTaskForm.scss";

// const datePicker = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);
//   const handleChange = (e) => {
//     setIsOpen(!isOpen);
//     setStartDate(e);
//   };
//   const handleClick = (e) => {
//     e.preventDefault();
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className="example-custom-input" onClick={handleClick}>
//         {format(startDate, "dd-MM-yyyy")}
//       </button>
//       {isOpen && (
//         <DatePicker selected={startDate} onChange={handleChange} inline />
//       )}
//     </>
//   );
// };

function NewTaskForm({ addTask }) {
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [optionCategory, setOptionCategory] = useState("");

  // const [startDate, setStartDate] = useState(new Date());
  // const [isOpen, setIsOpen] = useState(false);

  // const handleChange = (e) => {
  //   setIsOpen(!isOpen);
  //   setStartDate(e);
  // };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskNameInput, optionCategory, taskDescription);
    setTaskNameInput("");
    setOptionCategory("");
    setTaskDescription("");
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

        <Flex gap='10px'>
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

          {/* <div>
            <button className="example-custom-input" onClick={handleClick}>
              {format(startDate, "dd-MM-yyyy")}
            </button>
            {isOpen && (
              <DatePicker selected={startDate} onChange={handleChange} inline />
            )}
          </div> */}
        </Flex>
      </form>
    </>
  );
}

export default NewTaskForm;
