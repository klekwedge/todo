import { Flex } from '@mantine/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import TaskDetail from '../TaskDetail/TaskDetail';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Header from '../Header/Header';
import './App.scss';
import CustomNavBar from '../CustomNavBar/CustomNavBar';
import MainPage from '../pages/MainPage';
import HabitsPage from '../pages/HabitsPage';

function App() {
  return (
    <Router>
      <Flex className="app">
        <CustomNavBar />
        <Flex direction="column" w="100%">
          <Header>
            <NewTaskForm />
            <ToggleTheme />
          </Header>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/habits" element={<HabitsPage />} /> */}
          </Routes>
        </Flex>
      </Flex>
    </Router>
  );
}

export default App;
