import { useState, useEffect } from "react";
import { Flex, Skeleton, Heading } from "@chakra-ui/react";
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


  useEffect(() => {
    if (taskBuff.name) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        nameTask: taskBuff.name,
        complete: false,
        category: taskBuff.category,
        description: taskBuff.description,
        creationDate: new Date().toLocaleString().split(", "),
      };

      setTasks([...tasks, newTask]);
    }
  }, [taskBuff]);

  // const addTask = (name, category, description) => {

  // };

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

  // const renderTasks = () => {
  //   const taskArr = filterTasksFunc();

  //   switch (filterTasks) {
  //     case "default":
  //       return taskArr.map((task) => (
  //         <TodoTaskItem
  //           task={task}
  //           key={task.id}
  //           toggleTask={toggleTask}
  //           removeTask={removeTask}
  //           tasks={tasks}
  //           setTasks={setTasks}
  //         />
  //       ));
  //     default:
  //       return null;
  //   }
  // };

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
          <Skeleton height="50px" width="100%" />
        )}
      </ul>
    </section>
  );
}

export default TodoMain;
