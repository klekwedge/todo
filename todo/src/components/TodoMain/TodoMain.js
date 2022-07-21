import { useState } from "react";
import "./TodoMain.scss";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";

function TodoMain() {
  const [currentTask, setCurrentTask] = useState({});

  return (
    <main className="todo">
      <TaskList setCurrentTask={setCurrentTask} />
      <TaskDetail currentTask={currentTask} />
    </main>
  );
}

export default TodoMain;
