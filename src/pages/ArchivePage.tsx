import TodoTaskItem from '../components/TodoTaskItem/TodoTaskItem';
import { useAppSelector } from '../hooks/useRedux';

function ArchivePage() {
  const { archiveTasks } = useAppSelector((state) => state.tasks);
  return (
    <main className="todo">
      <ul className="todo__task-list">
        {archiveTasks.length > 0 ? (
          archiveTasks
            .map((task) => <TodoTaskItem isArchive task={task} key={task.id} />)
            .sort((el) => (el.props.task.complete ? 1 : -1))
        ) : (
          <h2>You do not have archive tasks</h2>
        )}
      </ul>
    </main>
  );
}

export default ArchivePage;
