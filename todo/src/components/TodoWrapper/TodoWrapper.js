import { useState } from "react";
import "./TodoWrapper.scss";

import { Flex, TabList } from "@chakra-ui/react";
// import TodoList from "../TodoList/TodoList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

import TodoTaskItem from "../TodoTaskItem/TodoTaskItem";

import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

function TodoWrapper() {
  const [tasks, setTasks] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        nameTask: userInput,
        complete: false,
      };

      setTasks([...tasks, newTask]);
    }
  };

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
    <>
      <main id="todolist">
        <h1 className="todo__title">Todo app </h1>
        <h2 className="todo__subtitle">Get things done, one item at a time.</h2>
        <ToggleTheme />
        <h3 className="todo__tasks">Your tasks: {tasks.length}</h3>
        <h3 className="todo__tasks">
          Your active tasks: {(tasks.filter((task) => task.complete !== true).length)}
        </h3>
        <ul className="todo__task-list">
          {tasks.map((task) => {
            return (
              <TodoTaskItem
                task={task}
                key={task.id}
                toggleTask={toggleTask}
                removeTask={removeTask}
              />
            );
          })}
        </ul>
        {/* <TodoList /> */}

        {/* <Flex gap='30px'>
          <DoneButton />
        </Flex> */}

        <NewTaskForm addTask={addTask} />
        <MoveDoneItems />
      </main>
    </>
  );
}

export default TodoWrapper;
