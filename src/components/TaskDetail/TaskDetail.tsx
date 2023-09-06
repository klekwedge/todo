import { Flex, Title, Textarea } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import './TaskDetail.scss';
import { setDescription } from '../../slices/tasksSlice';

function TaskDetail() {
  const { currentTask } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  if (!currentTask) {
    return null;
  }

  console.log(currentTask.deadline);

  return (
    <section className="task-detail">
      <Title order={3} fw="400" fz="28px" p="0px 0px 10px 0px" lh="24px" mb="10px">
        {currentTask.taskName}
      </Title>

      <Flex direction="column" gap="2px" pos="relative">
        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Status:</span> {currentTask.complete ? 'Done' : 'Active'}
        </Title>

        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Deadline:</span>{' '}
          {currentTask.deadline ? currentTask.deadline.toLocaleString() : 'No deadline'}
        </Title>

        <Title order={4} mb="5px" fw="400" fz="18px">
          <span className="_highlight">Task creation date:</span> {currentTask.creationDate.toLocaleString()}
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
      </Flex>
    </section>
  );
}

export default TaskDetail;
