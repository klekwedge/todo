import { useState } from "react";
import "./TodoWrapper.scss";

import TodoList from "../TodoList/TodoList";
import Newitem from "../NewTask/NewTask";
import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

function TodoWrapper() {
  // const [currentTheme, setCurrentTheme] = useState("white");

  const [task, setTack] = useState("");

  // function changeTheme(){
  //   document.body.classList.toggle('dark')
  // }

  const updateList = (taskName) => {
    setTack(taskName);
  };

  return (
    <main id="todolist">
      <h1 className="todo__title">Todo List </h1>
      <h2>Get things done, one item at a time.</h2>
      <ToggleTheme />
      <TodoList newTask={task} />
      <MoveDoneItems />
      <Newitem updateList={updateList} />
    </main>
  );
}

export default TodoWrapper;
