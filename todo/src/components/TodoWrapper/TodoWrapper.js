import { useRef, useState } from "react";
import "./TodoWrapper.scss";
import { Flex } from "@chakra-ui/react";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TodoTaskItem from "../TodoTaskItem/TodoTaskItem";
import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
// import FilterButton from "../FilterButton/FilterButton";

function TodoWrapper() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name, category, description) => {
    if (name) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        nameTask: name,
        complete: false,
        category: category,
        description: description
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
      <main id="todo">
        <h1 className="todo__title">Todo app </h1>
        <h2 className="todo__subtitle">Get things done, one item at a time.</h2>
        <ToggleTheme />
        {/* <Flex gap='5px'>
          <FilterButton label={"Active"} buttonColorScheme={'red'}/>
          <FilterButton label={"Done"} buttonColorScheme={'green'}/>
        </Flex> */}
        {/* <h3 className="todo__total-tasks">Your tasks: {tasks.length}</h3> */}
        <NewTaskForm addTask={addTask} />

        <h3 className="todo__tasks">
          Active tasks — {tasks.filter((task) => task.complete !== true).length}{" "}
          / {tasks.length}
        </h3>

        
        <ul className="todo__task-list">
          {tasks.map((task) => {
            if (task.complete === false) {
              return (
                <TodoTaskItem
                  task={task}
                  key={task.id}
                  toggleTask={toggleTask}
                  removeTask={removeTask}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            }
            return;
          })}
        </ul>

        <h3 className="todo__tasks">
          Completed tasks —{" "}
          {tasks.filter((task) => task.complete === true).length} /
          {tasks.length}
        </h3>

        <ul className="todo__task-list">
          {tasks.map((task) => {
            if (task.complete === true) {
              return (
                <TodoTaskItem
                  task={task}
                  key={task.id}
                  toggleTask={toggleTask}
                  removeTask={removeTask}
                  doneButton={false}
                  returnButton={true}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            }
            return;
          })}
        </ul>

        <MoveDoneItems />

      </main>
    </>
  );
}

export default TodoWrapper;
