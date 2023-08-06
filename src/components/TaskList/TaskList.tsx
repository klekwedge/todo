import { useState, useEffect, useRef } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import useScrollbar from '../../hooks/useScrollbar';
import './TaskList.scss';
import TodoTaskItem from '../TodoTaskItem/TodoTaskItem';
import { ITask } from '../../types/types';
import { useAppSelector } from '../../hooks/redux-hook';

interface TodoMainProps {
  setCurrentTask: (currentTask: ITask) => void;
  taskBuff: ITask | undefined;
  currentTask: ITask | undefined;
}

function TodoMain({ setCurrentTask, taskBuff, currentTask }: TodoMainProps) {
  // const [tasks, setTasks] = useState<ITask[]>([]);
  const { tasks } = useAppSelector((state) => state.tasks);

  const todoListScrollWrapper = useRef(null);
  const hasScroll = tasks.length > 6;

  useEffect(() => {
    // if (taskBuff && taskBuff.taskName) {
    //   const newTask: ITask = {
    //     id: taskBuff.id,
    //     taskName: taskBuff.taskName,
    //     complete: taskBuff.complete,
    //     category: taskBuff.category,
    //     description: taskBuff.description,
    //     deadline: taskBuff.deadline,
    //     creationDate: taskBuff.creationDate,
    //   };

    //   setTasks([...tasks, newTask]);
    // }
  }, [taskBuff]);


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
                  // toggleTask={toggleTask}
                  // removeTask={removeTask}
                  tasks={tasks}
                  // setTasks={setTasks}
                  setCurrentTask={setCurrentTask}
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
