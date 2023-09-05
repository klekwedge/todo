import TaskList from '../TaskList/TaskList';
import TaskDetail from '../TaskDetail/TaskDetail';


function MainPage() {
  return (
    <main className="todo">
      <TaskList />
      <TaskDetail />
    </main>
  );
}

export default MainPage;
