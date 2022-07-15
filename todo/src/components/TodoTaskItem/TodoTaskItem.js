import { Image, Flex } from "@chakra-ui/react";
import "./TodoTaskItem.scss";

import deleteIcon from "./../../resources/img/delete.png";
import editIcon from "./../../resources/img/edit.png";
import DoneButton from "../DoneButton/DoneButton";
import ReturnButton from "../ReturnButton/ReturnButton";

function newTaskItem({
  task,
  removeTask,
  toggleTask,
  doneButton = true,
  returnButton = false,
}) {
  return (
    // key={task.id}}
    <li className={task.complete ? "todo__item task green" : "todo__item task"}>
      <Flex gap="20px">
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
        <h3 className="task__name">{task.nameTask}</h3>
      </Flex>

      <Flex alignItems="center">
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
            onClick={() => removeTask(task.id)}
          />
        </button>
      </Flex>
    </li>
  );
}

export default newTaskItem;
