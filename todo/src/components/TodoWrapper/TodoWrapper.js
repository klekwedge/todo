import { useState } from "react";
import "./TodoWrapper.scss";

import { Flex } from "@chakra-ui/react";
import TodoList from "../TodoList/TodoList";
import Newitem from "../NewTask/NewTask";
import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import DoneButton from "../DoneButton/DoneButton";

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
    <>
      <main id="todolist">
        <h1 className="todo__title">Todo List </h1>
        <h2 className="todo__subtitle">Get things done, one item at a time.</h2>
        <ToggleTheme />

        <TodoList newTask={task} />

        {/* <Flex gap='30px'>
          <DoneButton />
        </Flex> */}

        <Newitem updateList={updateList} />
        <MoveDoneItems />
      </main>
    </>
  );
}

export default TodoWrapper;
