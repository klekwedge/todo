import { useState } from "react";
import "./TodoMain.scss";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import BackgroundSelection from '../BackgroundSelection/BackgroundSelection';
function TodoMain() {
  const [currentTask, setCurrentTask] = useState({});
  return (
    <>
      <main className="todo">
        <ToggleTheme />
        <BackgroundSelection/>
        <TaskList setCurrentTask={setCurrentTask} />
        <TaskDetail currentTask={currentTask} />
      </main>
    </>
  );
}

export default TodoMain;
