import { Flex, Title, Textarea } from '@mantine/core';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import './TaskDetail.scss';
import { setDescription } from '../../slices/tasksSlice';

function TaskDetail() {
  const { currentTask } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  if (!currentTask) {
    return null;
  }

  return (
    <section className="task-detail">
      <Title order={3} fw="400" fz="28px" p="0px 0px 10px 0px" lh="24px" mb="10px">
        {currentTask.taskName}
      </Title>

      {/* <Flex justify="space-between" mb="10px"> */}
      <Flex direction="column" gap="2px" pos="relative">
        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Status:</span> {currentTask.complete ? 'Done' : 'Active'}
        </Title>

        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Deadline:</span> {currentTask.deadline ? '' : 'No deadline'}
        </Title>

        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Task creation date:</span> {currentTask.creationDate[0].slice(0, -5)}.
          {currentTask.creationDate[0].slice(8)} ({currentTask.creationDate[1]})
        </Title>

        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Description:</span>
        </Title>
        <Textarea
          placeholder="Your description"
          value={currentTask.description}
          onChange={(e) => dispatch(setDescription({ value: e.target.value, id: currentTask.id }))}
          w="100%"
        />
        {/* </Flex> */}
        {/* <Title order={4} mb="5px" fw="400" fz="18px">
          {currentTask.category ? (
            <Badge size="md">{currentTask.category[0].toUpperCase() + currentTask.category.slice(1)}</Badge>
          ) : (
            <Button p="5px" size="8xl" color="blue">
              Add category
            </Button>
          )}
        </Title> */}
      </Flex>
    </section>
  );
}

export default TaskDetail;
