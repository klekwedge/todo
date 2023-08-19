import { Flex } from '@chakra-ui/react';
import TaskList from '../TaskList/TaskList';
import TaskDetail from '../TaskDetail/TaskDetail';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import BackgroundSelection from '../BackgroundSelection/BackgroundSelection';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <Flex className='app' flexDirection="column" minHeight="100%">
      <Header>
        <NewTaskForm />
        {/* <BackgroundSelection /> */}
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
