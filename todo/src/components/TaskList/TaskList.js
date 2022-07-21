import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import "./TaskList.scss";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TodoTaskItem from "../TodoTaskItem/TodoTaskItem";
import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import FilterButton from "../FilterButton/FilterButton";

function TodoMain({ taskDetailIsOpen, setTaskDetailIsOpen, setCurrentTask }) {
  const [tasks, setTasks] = useState([]);

  const [completedTasksAtTheEnd, setCompletedTasksAtTheEnd] = useState(false);
  const [filterTasks, setFilterTasks] = useState("default");

  const addTask = (name, category, description) => {
    if (name) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        nameTask: name,
        complete: false,
        category: category,
        description: description,
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

  // const renderTasks = () => {
  //   const taskArr = filterTasksFunc();

  //   console.log(taskArr);

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

  const filterTasksFunc = () => {
    if (completedTasksAtTheEnd) {
      return tasks
        .map((task) => (
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
        .sort((task) => (task.complete ? 1 : -1));
    }

    return tasks.map((task) => (
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
    ));
  };

  return (
    <section id="todo">
      <h1 className="todo__title">Todo app </h1>
      <h2 className="todo__subtitle">Get things done, one item at a time.</h2>
      {/* <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          mb="20px"
        /> */}

      <ToggleTheme />
      <Flex gap="5px">
        <FilterButton
          label={"All"}
          buttonColorScheme={"blue"}
          filterRule={"default"}
          setFilterTasks={setFilterTasks}
        />
        <FilterButton
          label={"Active"}
          buttonColorScheme={"red"}
          filterRule={"active"}
          setFilterTasks={setFilterTasks}
        />
        <FilterButton
          label={"Done"}
          buttonColorScheme={"green"}
          filterRule={"done"}
          setFilterTasks={setFilterTasks}
        />
      </Flex>
      <NewTaskForm addTask={addTask} />

      <h3 className="todo__total-tasks">Your tasks: {tasks.length}</h3>
      {/* <h3 className="todo__tasks">
          Active tasks — {tasks.filter((task) => task.complete !== true).length}{" "}
          / {tasks.length}
        </h3> */}

      <ul className="todo__task-list">{filterTasksFunc()}</ul>
      {/* <ul className="todo__task-list">
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
        </ul> */}

      {/* <h3 className="todo__tasks">
          Completed tasks —{" "}
          {tasks.filter((task) => task.complete === true).length} /
          {tasks.length}
        </h3> */}

      {/* <ul className="todo__task-list">
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
        </ul> */}

      <MoveDoneItems
        completedTasksAtTheEnd={completedTasksAtTheEnd}
        setCompletedTasksAtTheEnd={setCompletedTasksAtTheEnd}
      />
    </section>
  );
}

export default TodoMain;
