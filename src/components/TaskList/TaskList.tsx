import { useRef } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import useScrollbar from '../../hooks/useScrollbar';
import './TaskList.scss';
import TodoTaskItem from '../TodoTaskItem/TodoTaskItem';
import { useAppSelector } from '../../hooks/redux-hook';


function TodoMain() {
  const { tasks } = useAppSelector((state) => state.tasks);

  const todoListScrollWrapper = useRef(null);
  const hasScroll = tasks.length > 6;

  useScrollbar(todoListScrollWrapper, hasScroll);

  return (
    <section className="task-list">
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
        style={{
          height: hasScroll ? '475px' : 'auto',
          minHeight: '475px',
        }}
        ref={todoListScrollWrapper}
      >
        <ul className="todo__task-list">
          {tasks.length > 0 ? (
            tasks
              .map((task) => (
                <TodoTaskItem
                  task={task}
                  key={task.id}
                />
              ))
              .sort((el) => (el.props.task.complete ? 1 : -1))
          ) : (
            <h2>You do not have any tasks</h2>
          )}
        </ul>
      </div>
    </section>
  );
}

export default TodoMain;
