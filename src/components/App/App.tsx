import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import TaskList from "../TaskList/TaskList";
import TaskDetail from "../TaskDetail/TaskDetail";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
// import Settings from "../Settings/Settings";
import BackgroundSelection from "../BackgroundSelection/BackgroundSelection";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Header from "../Header/Header";
// import Filters from '../Filters/Filters';
import "./App.scss";
import { ITask } from "../../types/types";

function App() {
  const [currentTask, setCurrentTask] = useState<ITask>();
  const [taskBuff, setTaskBuff] = useState<ITask>();

  const updateTaskBuff = (
    id: string,
    taskName: string,
    complete: boolean,
    category: string,
    description: string,
    deadline: string | null,
    creationDate: string[]
  ) => {
    setTaskBuff({
      id,
      taskName,
      complete,
      category,
      description,
      deadline,
      creationDate,
    });
  };

  return (
    <Flex flexDirection="column" minHeight="100%">
      <Header>
        <NewTaskForm updateTaskBuff={updateTaskBuff} />
        {/* <Settings /> */}
        <BackgroundSelection />
        <ToggleTheme />
      </Header>
      <main className="todo">
        <TaskList
          currentTask={currentTask}
          setCurrentTask={setCurrentTask}
          taskBuff={taskBuff}
        />
        <Flex flexDirection="column" gap="30px" minWidth="450px">
          <TaskDetail currentTask={currentTask} />
          {/* <Filters /> */}
        </Flex>
      </main>
    </Flex>
  );
}

export default App;
