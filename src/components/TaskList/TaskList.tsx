/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useRef } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import useScrollbar from '../../hooks/useScrollbar';
import './TaskList.scss';
import TodoTaskItem from '../TodoTaskItem/TodoTaskItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook';
import { setTasks } from '../../slices/tasksSlice';

function TodoMain() {
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const taskListRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks') || '');

    if (localTasks) {
      dispatch(setTasks(localTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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

  // const todoListScrollWrapper = useRef(null);
  // const hasScroll = tasks.length > 6;

  // useScrollbar(todoListScrollWrapper, hasScroll);

  return (
    <section className="task-list" ref={taskListRef}>
      <Flex borderBottom="1px solid rgba(0, 0, 0, 0.3)" pb="10px" justifyContent="space-between" mb="20px">
        <Heading as="h1" fontWeight="500" fontSize="32px">
          Your tasks
        </Heading>

        <Flex alignItems="flex-end" gap="10px" fontWeight="400">
          <Heading as="h2" size="sm" fontWeight="400">
            All: {tasks.length}
          </Heading>
          <Heading as="h2" size="sm" fontWeight="400">
            Done: {tasks.filter((task) => task.complete === true).length}
          </Heading>
          <Heading as="h2" size="sm" fontWeight="400">
            Active: {tasks.filter((task) => task.complete !== true).length}
          </Heading>
        </Flex>
      </Flex>

      <div
        // style={{
        //   height: hasScroll ? '475px' : 'auto',
        //   minHeight: '475px',
        // }}
        // ref={todoListScrollWrapper}
      >
        <ul className="todo__task-list">
          {tasks.length > 0 ? (
            tasks
              .map((task) => <TodoTaskItem task={task} key={task.id} />)
              .sort((el) => (el.props.task.complete ? 1 : -1))
          ) : (
            <h2>You do not have any tasks</h2>
          )}
        </ul>
      </div>
      <div id="resize" onMouseDown={saveX} />
    </section>
  );
}

export default TodoMain;
