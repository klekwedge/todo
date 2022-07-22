import { useState } from "react";
import "./TodoMain.scss";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import BackgroundSelection from "../BackgroundSelection/BackgroundSelection";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

function TodoMain() {
  const [currentTask, setCurrentTask] = useState({});
  const [taskBuff, setTaskBuff] = useState({});

  const updateTaskBuff = (taskNameInput, optionCategory, taskDescription) => {
    setTaskBuff({taskNameInput, optionCategory, taskDescription});
 }

  return (
    <>
      <main className="todo">
        <ToggleTheme />
        <BackgroundSelection />
        <NewTaskForm updateTaskBuff={updateTaskBuff}/>
        <TaskList setCurrentTask={setCurrentTask} taskBuff={taskBuff}/>
        <TaskDetail currentTask={currentTask} />
      </main>
    </>
  );
}

export default TodoMain;
