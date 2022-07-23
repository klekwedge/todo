import { useState } from "react";
import "./TodoMain.scss";

import { Flex } from "@chakra-ui/react";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import Settings from "../Settings/Settings";
import BackgroundSelection from "../BackgroundSelection/BackgroundSelection";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";

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
        <Settings />
        <BackgroundSelection />
        <ToggleTheme />
      </Header>
      <main className="todo">
        <TaskList setCurrentTask={setCurrentTask} taskBuff={taskBuff} />
        <Flex flexDirection="column" gap="40px">
          <TaskDetail currentTask={currentTask} />
          <Filters />
        </Flex>
      </main>
    </Flex>
  );
}

export default TodoMain;
