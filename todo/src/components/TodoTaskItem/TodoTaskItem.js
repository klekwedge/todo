import { useRef, useState } from "react";
import { Flex, Badge } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import "./TodoTaskItem.scss";

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
  setCurrentTask,
}) {
  const [taskName, setTaskName] = useState(task.nameTask);
  const refFirst = useRef();

  let edit = true;

  const saveTaskEdit = function () {
    if (edit) {
      refFirst.current.contentEditable = true;
      refFirst.current.focus();
    } else {
      setTaskName(refFirst.current.textContent);
      refFirst.current.contentEditable = false;

      setTasks([
        ...tasks.map((taskItem) =>
          taskItem.id === task.id
            ? { ...task, nameTask: refFirst.current.textContent }
            : { ...taskItem }
        ),
      ]);
    }

    edit = !edit;
  };

  const keySaveTaskEdit = (e) => {
    if (e.key === "Enter") {
      refFirst.current.blur();
    }
  };

  const categoryTask = () => {
    switch (task.category) {
      case "personal":
        return (
          <Badge colorScheme="green" padding="5px" color="black">
            Personal
          </Badge>
        );
      case "work":
        return (
          <Badge colorScheme="red" padding="5px" color="black">
            Work
          </Badge>
        );
      case "study":
        return (
          <Badge colorScheme="purple" padding="5px" color="black">
            Study
          </Badge>
        );
      case "other":
        return (
          <Badge colorScheme="blue" padding="5px" color="black">
            Other
          </Badge>
        );
      default:
        return null;
    }
  };

  // const test = () => {
  //   console.log("Hello!");
  // };

  return (
    // key={task.id}}
    <li
      className={task.complete ? "todo__item task green" : "todo__item task"}
      onClick={() => setCurrentTask(task)}
    >
      <Flex gap="20px" justifyContent="space-between" mb="5px">
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

        <Flex alignItems="center" gap="5px">
          <IconButton
            title="Edit"
            onClick={saveTaskEdit}
            colorScheme="teal"
            aria-label="Call Segun"
            size="sm"
            icon={<EditIcon />}
          />

          <IconButton
            title="Delete task"
            colorScheme="blue"
            onClick={() => removeTask(task.id)}
            size="sm"
            icon={<DeleteIcon />}
          />
        </Flex>
      </Flex>

      <Flex
        gap="20px"
        justifyContent="flex-end"
        alignItems="center"
        padding="0px 0px 0px 0px"
      >
        {categoryTask()}
      </Flex>
    </li>
  );
}

export default TodoTaskItem;
