/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Flex, Checkbox, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import useCategoryTask from '../../hooks/useCategoryTask';
import { ITask } from '../../types/types';
import { useAppDispatch } from '../../hooks/redux-hook';
import { chooseTask, removeTask, toggleTask } from '../../slices/tasksSlice';
import './TodoTaskItem.scss';

interface TodoTaskItemProps {
  task: ITask;
}

function TodoTaskItem({ task }: TodoTaskItemProps) {
  const dispatch = useAppDispatch();

  const edit = (taskId: string) => {};

  const toggle = (e: React.ChangeEvent, taskId: string) => {
    dispatch(toggleTask(taskId));
  };

  const remove = (e: React.MouseEvent, taskId: string) => {
    e.stopPropagation();
    dispatch(removeTask(taskId));
  };

  const choose = (taskId: string) => {
    dispatch(chooseTask(taskId));
  };

  const categoryTask = useCategoryTask(task.category);

  return (
    <li
      key={task.id}
      className={task.complete ? 'todo__item task todo__item_complete' : 'todo__item task'}
      onClick={() => choose(task.id)}
    >
      <Flex gap="20px" justifyContent="space-between" mb="5px">
        <Flex gap="10px" alignItems="center">
          <Checkbox size="lg" title="Done" onChange={(e) => toggle(e, task.id)} />
          <h3 className="task__name">{task.taskName}</h3>
        </Flex>

        <Flex alignItems="center" gap="5px">
          {categoryTask}
          <IconButton
            title="Edit"
            onClick={() => edit(task.id)}
            colorScheme="teal"
            aria-label=""
            size="sm"
            icon={<EditIcon />}
          />

          <IconButton
            title="Delete task"
            colorScheme="blue"
            onClick={(e) => remove(e, task.id)}
            size="sm"
            icon={<DeleteIcon />}
            aria-label=""
          />
        </Flex>
      </Flex>
    </li>
  );
}

export default TodoTaskItem;
