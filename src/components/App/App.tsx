import { AppShell, Flex } from '@mantine/core';
import TaskList from '../TaskList/TaskList';
import TaskDetail from '../TaskDetail/TaskDetail';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Header from '../Header/Header';
import './App.scss';
import CustomNavBar from '../CustomNavBar/CustomNavBar';

function App() {
  return (
    <Flex className="app">
      <CustomNavBar />
      <Flex direction="column" w='100%'>
        <Header>
          <NewTaskForm />
          <ToggleTheme />
        </Header>
        <main className="todo">
          <TaskList />
          <TaskDetail />
        </main>
      </Flex>
    </Flex>
  );
}

export default App;
