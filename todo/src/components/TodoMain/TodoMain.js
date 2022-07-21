import { useState } from "react";
import "./TodoMain.scss";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";

function TodoMain() {
  const [taskDetailIsOpen, setTaskDetailIsOpen] = useState(true);
  const [currentTask, setCurrentTask] = useState('');
  return (
    <main className="todo">
      <TaskList
        taskDetailIsOpen={taskDetailIsOpen}
        setTaskDetailIsOpen={setTaskDetailIsOpen}
        setCurrentTask={setCurrentTask}
      />
      {taskDetailIsOpen ? <TaskDetail currentTask={currentTask} /> : null}
    </main>
  );
}

export default TodoMain;
