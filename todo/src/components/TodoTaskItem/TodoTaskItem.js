import { useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { useCategoryTask } from "../../hooks/useCategoryTask";

import "./TodoTaskItem.scss";

import DoneButton from "../DoneButton/DoneButton";

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

  const categoryTask = useCategoryTask(task.category);

  return (
    // key={task.id}}
    <li
      className={task.complete ? "todo__item task green" : "todo__item task"}
      onClick={() => setCurrentTask(task)}
    >
      <Flex gap="20px" justifyContent="space-between" mb="5px">
        <Flex gap="10px" alignItems="center">
          <DoneButton
            taskId={task.id}
            onToggleTask={() => toggleTask(task.id)}
          />

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
          {categoryTask}
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
    </li>
  );
}

export default TodoTaskItem;
