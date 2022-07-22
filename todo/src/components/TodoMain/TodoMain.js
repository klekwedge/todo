import { useState } from "react";
import "./TodoMain.scss";

import { Flex } from "@chakra-ui/react";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import BackgroundSelection from "../BackgroundSelection/BackgroundSelection";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Header from "../Header/Header";

function TodoMain() {
  const [currentTask, setCurrentTask] = useState({});
  const [taskBuff, setTaskBuff] = useState({});

  const updateTaskBuff = (name, category, description) => {
    setTaskBuff({ name, category, description });
  };

  return (
    <Flex flexDirection="column">
      <Header>
        <NewTaskForm updateTaskBuff={updateTaskBuff} />
        <BackgroundSelection />
        <ToggleTheme />
      </Header>
      <main className="todo">
        <TaskList setCurrentTask={setCurrentTask} taskBuff={taskBuff} />
        <TaskDetail currentTask={currentTask} />
      </main>
    </Flex>
  );
}

export default TodoMain;
