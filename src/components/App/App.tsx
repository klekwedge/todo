import { Flex } from '@mantine/core'
import TaskList from '../TaskList/TaskList';
import TaskDetail from '../TaskDetail/TaskDetail';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <Flex className='app'>
      <Header>
        <NewTaskForm />
        <ToggleTheme />
      </Header>
      <main className="todo">
        <TaskList />
        <TaskDetail />
      </main>
    </Flex>
  );
}

export default App;
