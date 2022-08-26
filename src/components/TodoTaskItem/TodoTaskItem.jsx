/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { Flex, Checkbox, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

import { useCategoryTask } from '../../hooks/useCategoryTask';

import './TodoTaskItem.scss';

function TodoTaskItem({
  task, removeTask, toggleTask, tasks, setTasks, setCurrentTask,
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
        ...tasks.map((taskItem) => (taskItem.id === task.id
          ? { ...task, nameTask: refFirst.current.textContent }
          : { ...taskItem })),
      ]);
    }

    edit = !edit;
  };

  const keySaveTaskEdit = (e) => {
    if (e.key === 'Enter') {
      refFirst.current.blur();
    }
  };

  const categoryTask = useCategoryTask(task.category);

  return (
    <li
      key={task.id}
      className={task.complete ? 'todo__item task todo__item_complete' : 'todo__item task'}
      onClick={() => setCurrentTask(task)}
    >
      <Flex gap="20px" justifyContent="space-between" mb="5px">
        <Flex gap="10px" alignItems="center">
          <Checkbox size="lg" title="Done" onChange={() => toggleTask(task.id)} />
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
