/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Flex, Checkbox, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, SettingsIcon } from '@chakra-ui/icons';
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

  const choose = (e: React.MouseEvent, taskId: string) => {
    const target = e.target as HTMLElement;

    if (target === 'DIV') {
      dispatch(chooseTask(taskId));
    }
  };

  const categoryTask = useCategoryTask(task.category);

  return (
    <li
      key={task.id}
      className={task.complete ? 'todo__item task todo__item_complete' : 'todo__item task'}
      onClick={(e) => choose(e, task.id)}
    >
      <Flex gap="20px" justifyContent="space-between" mb="5px">
        <Flex gap="10px" alignItems="center">
          <Checkbox size="lg" title="Done" onChange={(e) => toggle(e, task.id)} />
          <h3 className="task__name">{task.taskName}</h3>
        </Flex>

        <Flex alignItems="center" gap="5px">
          {categoryTask}
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<SettingsIcon />} variant="outline" />
            <MenuList>
              <MenuItem icon={<EditIcon />} onClick={() => edit(task.id)}>
                Edit task
              </MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={(e) => remove(e, task.id)}>
                Delete task
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </li>
  );
}

export default TodoTaskItem;
