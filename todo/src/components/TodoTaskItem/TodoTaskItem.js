import { useRef, useState } from "react";
import { Image, Flex } from "@chakra-ui/react";
import "./TodoTaskItem.scss";

import deleteIcon from "./../../resources/img/delete.png";
import editIcon from "./../../resources/img/edit.png";
import DoneButton from "../DoneButton/DoneButton";
import ReturnButton from "../ReturnButton/ReturnButton";

function TodoTaskItem({
  task,
  removeTask,
  toggleTask,
  doneButton = true,
  returnButton = false,
  tasks,
  setTasks,
}) {
  const [taskName, setTaskName] = useState(task.nameTask);
  const refFirst = useRef();

  let edit = true;

  const saveTaskEdit = function () {
    if (edit) {
      refFirst.current.contentEditable = true;
      refFirst.current.focus();
    } else {
      // console.log(refFirst.current.textContent);

      setTaskName(refFirst.current.textContent);
      refFirst.current.contentEditable = false;

      console.log(task);
      console.log(tasks);
      // console.log('test');

      setTasks([
        ...tasks.map((taskItem) =>
          taskItem.id === task.id
            ? { ...task, nameTask: refFirst.current.textContent }
            : { ...taskItem }
        ),
      ]);
    }

    // console.log("test");

    edit = !edit;
  };

  const keySaveTaskEdit = (e) => {
    if (e.key === "Enter") {
      refFirst.current.blur();
    }
  };

  return (
    // key={task.id}}
    <li className={task.complete ? "todo__item task green" : "todo__item task"}>
      <Flex gap="20px" alignItems="center">
        {doneButton ? (
          <DoneButton
            taskId={task.id}
            onToggleTask={() => toggleTask(task.id)}
          />
        ) : null}

        {returnButton ? (
          <ReturnButton
            taskId={task.id}
            onToggleTask={() => toggleTask(task.id)}
          />
        ) : null}

        {/*  onClick={() => toggleTask(task.id)} */}
        <h3
          className="task__name"
          ref={refFirst}
          onBlur={saveTaskEdit}
          onKeyDown={keySaveTaskEdit}
        >
          {taskName}
        </h3>
      </Flex>

      <Flex alignItems="center">
        <button
          className="btn-picto"
          type="button"
          title="Edit"
          onClick={saveTaskEdit}
        >
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
            onClick={() => removeTask(task.id)}
          />
        </button>
      </Flex>
    </li>
  );
}

export default TodoTaskItem;
