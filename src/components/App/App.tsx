import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import TaskList from '../TaskList/TaskList';
import TaskDetail from '../TaskDetail/TaskDetail';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import BackgroundSelection from '../BackgroundSelection/BackgroundSelection';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Header from '../Header/Header';
import { ITask } from '../../types/types';
import './App.scss';

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
    creationDate: string[],
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
        <BackgroundSelection />
        <ToggleTheme />
      </Header>
      <main className="todo">
        <TaskList currentTask={currentTask} setCurrentTask={setCurrentTask} taskBuff={taskBuff} />
        <Flex flexDirection="column" gap="30px" minWidth="450px">
          <TaskDetail currentTask={currentTask} />
        </Flex>
      </main>
    </Flex>
  );
}

export default App;
