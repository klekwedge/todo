import { Image, Flex } from "@chakra-ui/react";
import "./TodoList.scss";
import deleteIcon from "./../../resources/img/delete.png";
import doneIcon from "./../../resources/img/done.png";
import editIcon from "./../../resources/img/edit.png";
import { useEffect, useState } from "react";

function TodoList(props) {
  const [tasks, setTasks] = useState([]);

  function createTask() {
    setTasks([...tasks, newTask()]);
  }

  function newTask(Taskindex) {
    return (
      <li className="todo__item task" key={Taskindex}>
        <h3 className="task__name">{props.newTask}</h3>
        <Flex alignItems="center" gap="2px">
          <button className="btn-picto" type="button" title="Done">
            <Image
              w="30px"
              src={doneIcon}
              alt="Done icon"
              transition={"all 0.4s ease"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </button>
          <button className="btn-picto" type="button" title="Edit">
            <Image
              w="30px"
              src={editIcon}
              alt="Edit icon"
              transition={"all 0.4s ease"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </button>
          <button className="btn-picto" type="button" title="Delete">
            <Image
              w="30px"
              src={deleteIcon}
              alt="Delete icon"
              transition={"all 0.4s ease"}
              _hover={{ transform: "scale(1.2)" }}
            />
          </button>
        </Flex>
      </li>
    );
  }

  // const newTaskList = (renderTasks(tasks, props.newTask));
  // console.log(newTaskList);

  return (
    <>
      <ul className="todo__list">
        {tasks.map((task, Taskindex) => {
          return <newTask Taskindex={Taskindex}></newTask>;
        })}

        {/* {tasks.length > 0 ? (
          { tasks }
        ) : (
          <p className="emptylist">Your todo list is empty.</p>
        )} */}
      </ul>
    </>
  );
}

export default TodoList;
