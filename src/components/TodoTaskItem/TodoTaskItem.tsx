/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Flex, Checkbox, Menu, ActionIcon } from '@mantine/core';
import { BsPencilSquare, BsTrashFill, BsGearFill } from 'react-icons/bs';
import useCategoryTask from '../../hooks/useCategoryTask';
import { ITask } from '../../types/types';
import { useAppDispatch } from '../../hooks/useRedux';
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

    if (target.tagName === 'DIV') {
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
      <Flex gap="20px" justify="space-between" mb="5px">
        <Flex gap="10px" align="center">
          <Checkbox
            size="sm"
            title="Done"
            onChange={(e) => toggle(e, task.id)}
            className={task.priority ? `todo__priority-${task.priority}` : ''}
          />
          <h3 className="task__name">{task.taskName}</h3>
        </Flex>

        <Flex align="center" gap="5px">
          {categoryTask}
          <Menu>
            <Menu.Target>
              <ActionIcon>
                <BsGearFill />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<BsPencilSquare />} onClick={() => edit(task.id)}>
                Edit task
              </Menu.Item>
              <Menu.Item icon={<BsTrashFill />} onClick={(e) => remove(e, task.id)}>
                Delete task
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>
    </li>
  );
}

export default TodoTaskItem;
