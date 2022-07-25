import { useState } from "react";
import "./App.scss";

import { Flex } from "@chakra-ui/react";

import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import Settings from "../Settings/Settings";
import BackgroundSelection from "../BackgroundSelection/BackgroundSelection";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";

function App() {
  const [currentTask, setCurrentTask] = useState({});
  const [taskBuff, setTaskBuff] = useState({});

  const updateTaskBuff = (name, category, description, deadline) => {
    setTaskBuff({ name, category, description, deadline });
  };

  return (
    <Flex flexDirection="column" minHeight="100%">
      <Header>
        <NewTaskForm updateTaskBuff={updateTaskBuff} />
        <Settings />
        <BackgroundSelection />
        <ToggleTheme />
      </Header>
      <main className="todo">
        <TaskList currentTask={currentTask} setCurrentTask={setCurrentTask} taskBuff={taskBuff} />
        <Flex flexDirection="column" gap="30px" minWidth="450px">
          <TaskDetail currentTask={currentTask} />
          <Filters />
        </Flex>
      </main>
    </Flex>
  );
}

export default App;
