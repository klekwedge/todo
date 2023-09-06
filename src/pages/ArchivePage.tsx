/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef } from 'react';
import TodoTaskItem from '../components/TodoTaskItem/TodoTaskItem';
import { useAppSelector } from '../hooks/useRedux';

function ArchivePage() {
  const { archiveTasks } = useAppSelector((state) => state.tasks);
  const taskListRef = useRef<HTMLElement>(null);

  let downed: boolean;
  let x: number;

  function stopStretch() {
    downed = false;
  }

  function saveX(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    downed = true;
    if (e) {
      x = e.pageX;
    }
    // else if (window.event) {
    //   x = window.event.clientX;
    // }
  }

  function moveBlock(e: MouseEvent) {
    if (downed) {
      if (e) {
        x = e.pageX;
      }
      // else if (window.event) {
      //   x = window.event.clientX;
      // }

      if (x < 1000 && x > 400 && taskListRef.current) {
        taskListRef.current.style.width = `${x}px`;
      }
    }
  }

  document.addEventListener('mouseup', stopStretch);
  document.addEventListener('mousemove', moveBlock);

  return (
    <section className="task-list" ref={taskListRef}>
      <div>
        <ul className="todo__task-list">
          {archiveTasks.length > 0 ? (
            archiveTasks
              .map((task) => <TodoTaskItem isArchive task={task} key={task.id} />)
              .sort((el) => (el.props.task.complete ? 1 : -1))
          ) : (
            <h2>You do not have archive tasks</h2>
          )}
        </ul>
      </div>
      <div id="resize" onMouseDown={saveX} />
    </section>
  );
}

export default ArchivePage;
