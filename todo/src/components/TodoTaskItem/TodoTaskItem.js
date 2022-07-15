import { Image, Flex } from "@chakra-ui/react";

import deleteIcon from "./../../resources/img/delete.png";
import doneIcon from "./../../resources/img/done.png";
import editIcon from "./../../resources/img/edit.png";

function newTaskItem({ task }) {
  return (
    <li className="todo__item task" key={task.id}>
      <h3 className="task__name">{task.nameTask}</h3>
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

export default newTaskItem;