import { useState, useEffect, useRef } from "react";
import { Flex, Skeleton, Heading } from "@chakra-ui/react";
import useScrollbar from "../../hooks/useScrollbar";
import "./TaskList.scss";

import TodoTaskItem from "../TodoTaskItem/TodoTaskItem";

function TodoMain({
  taskDetailIsOpen,
  setTaskDetailIsOpen,
  setCurrentTask,
  taskBuff,
}) {
  // const localTasks = localStorage.getItem('tasks')

  const [tasks, setTasks] = useState([]);

  const todoListScrollWrapper = useRef(null);
  const hasScroll = tasks.length > 6;
  useScrollbar(todoListScrollWrapper, hasScroll);

  useEffect(() => {
    if (taskBuff.name) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        nameTask: taskBuff.name,
        complete: false,
        category: taskBuff.category,
        description: taskBuff.description,
        deadline: taskBuff.deadline,
        creationDate: new Date().toLocaleString().split(", "),
      };

      setTasks([...tasks, newTask]);
    }
  }, [taskBuff]);

  const removeTask = (taskId) => {
    // setTasks(tasks.filter((task) => task.id !== taskId))
    setTasks([...tasks.filter((task) => task.id !== taskId)]);
  };

  const toggleTask = (taskId) => {
    // setTasks(tasks.filter((task) => task.id !== taskId))
    setTasks([
      ...tasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : { ...task }
      ),
    ]);
  };

  return (
    <section className="task-list">
      <Flex
        borderBottom="1px solid rgba(0, 0, 0, 0.3)"
        pb="10px"
        justifyContent="space-between"
        mb="20px"
      >
        <Heading as="h1" fontWeight="400">
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
          height: hasScroll ? "475px" : "auto",
          minHeight: "475px",
        }}
        ref={todoListScrollWrapper}
      >
        <ul className="todo__task-list">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TodoTaskItem
                task={task}
                key={task.id}
                toggleTask={toggleTask}
                removeTask={removeTask}
                tasks={tasks}
                setTasks={setTasks}
                setDetailOpen={setTaskDetailIsOpen}
                taskDetailIsOpen={taskDetailIsOpen}
                setCurrentTask={setCurrentTask}
              />
            ))
          ) : (
            <>
              <Skeleton height="475px" width="100%" />
            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default TodoMain;
