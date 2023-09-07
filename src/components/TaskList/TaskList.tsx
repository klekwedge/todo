/* eslint-disable jsx-a11y/no-static-element-interactions */
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import { useEffect, useMemo, useRef } from 'react';
import { Flex, ScrollArea, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import './TaskList.scss';
import TodoTaskItem from '../TodoTaskItem/TodoTaskItem';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setCollections, setTasks } from '../../slices/tasksSlice';

function TodoMain() {
  const params = useParams();

  const { tasks, collections } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const taskListRef = useRef<HTMLElement>(null);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks') || '{}');
    const localCollections = JSON.parse(localStorage.getItem('collections') || '{}');

    if (Array.isArray(localTasks)) {
      dispatch(setTasks(localTasks));
      dispatch(setCollections(localCollections));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections));
  }, [collections]);

  let downed: boolean;
  let x: number;

  function stopStretch() {
    downed = false;
  }

  function saveX(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    downed = true;
    if (e) {
      x = e.pageX;
    }
    // else if (window.event) {
    //   x = window.event.clientX;
    // }
  }

  function moveBlock(e: MouseEvent) {
    if (downed) {
      if (e) {
        x = e.pageX;
      }
      // else if (window.event) {
      //   x = window.event.clientX;
      // }

      if (x < 1000 && x > 400 && taskListRef.current) {
        taskListRef.current.style.width = `${x}px`;
      }
    }
  }

  document.addEventListener('mouseup', stopStretch);
  document.addEventListener('mousemove', moveBlock);

  const filteredTasks = params.collectionId ? tasks.filter((task) => task.collectionId === params.collectionId) : tasks;

  const data = '##### 111';

  return (
    <section className="task-list" ref={taskListRef}>
      <Flex pb="10px" justify="space-between" mb="20px">
        <Title order={2} fw="400" fz="32px">
          Your tasks
        </Title>

        <Flex align="flex-end" gap="10px" fw="400">
          <Title order={3} size="sm" fw="400">
            All: {filteredTasks.length}
          </Title>
          <Title order={3} size="sm" fw="400">
            Done: {filteredTasks.filter((task) => task.complete === true).length}
          </Title>
          <Title order={3} size="sm" fw="400">
            Active: {filteredTasks.filter((task) => task.complete !== true).length}
          </Title>
        </Flex>
      </Flex>
      <ReactMarkdown>{data}</ReactMarkdown>
      <SimpleMDE />

      <ScrollArea type="auto" h="100%" offsetScrollbars>
        <ul className="todo__task-list">
          {tasks.length > 0 ? (
            filteredTasks
              .map((task) => <TodoTaskItem isArchive={false} task={task} key={task.id} />)
              .sort((el) => (el.props.task.complete ? 1 : -1))
          ) : (
            <h2>You do not have any tasks</h2>
          )}
        </ul>
      </ScrollArea>
      <div id="resize" onMouseDown={saveX} />
    </section>
  );
}

export default TodoMain;
