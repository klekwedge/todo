/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Flex, Checkbox, Menu, ActionIcon } from '@mantine/core';
import { BsPencilSquare, BsTrashFill, BsThreeDots, BsArchive } from 'react-icons/bs';
import { ITask } from '../../types/types';
import { useAppDispatch } from '../../hooks/useRedux';
import { addArchiveTask, chooseTask, deleteArchiveTask, removeTask, toggleTask } from '../../slices/tasksSlice';
import './TodoTaskItem.scss';

interface TodoTaskItemProps {
  task: ITask;
  isArchive: boolean;
}

function TodoTaskItem({ isArchive, task }: TodoTaskItemProps) {
  const dispatch = useAppDispatch();

  const edit = (taskId: string) => {};

  const toggle = () => {
    dispatch(toggleTask(task.id));
  };

  const remove = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(isArchive);

    if(isArchive) {
      dispatch(deleteArchiveTask(task.id));
    }
    else{
    dispatch(removeTask(task.id));

    }
  };

  const archive = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addArchiveTask(task));
  };

  const choose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'DIV') {
      dispatch(chooseTask(task.id));
    }
  };

  return (
    <li
      key={task.id}
      className={task.complete ? 'todo__item task todo__item_complete' : 'todo__item task'}
      onClick={(e) => choose(e)}
      style={{ borderLeft: `${task.collectionColor ? `5px solid ${task.collectionColor}` : ''}` }}
    >
      <Flex gap="20px" justify="space-between" mb="5px">
        <Flex gap="10px" align="center">
          <Checkbox
            size="sm"
            title="Done"
            onChange={() => toggle()}
            className={task.priority ? `todo__priority-${task.priority}` : ''}
          />
          <h3 className="task__name">{task.taskName}</h3>
        </Flex>

        <Flex align="center" gap="5px">
          <Menu>
            <Menu.Target>
              <ActionIcon>
                <BsThreeDots />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<BsPencilSquare />} onClick={() => edit(task.id)}>
                Edit task
              </Menu.Item>
              <Menu.Item icon={<BsTrashFill />} onClick={(e) => remove(e)}>
                Delete task
              </Menu.Item>
              {!isArchive ? (
                <Menu.Item icon={<BsArchive />} onClick={(e) => archive(e)}>
                  Archive task
                </Menu.Item>
              ) : (
                ''
              )}
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>
    </li>
  );
}

export default TodoTaskItem;
