import TaskList from '../components/TaskList/TaskList';
import TaskDetail from '../components/TaskDetail/TaskDetail';


function MainPage() {
  return (
    <main className="todo">
      <TaskList />
      <TaskDetail />
    </main>
  );
}

export default MainPage;
