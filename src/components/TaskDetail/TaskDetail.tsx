import { Flex, Title } from '@mantine/core';
import { BsFillCursorFill } from 'react-icons/bs';
import { useAppSelector } from '../../hooks/useRedux';
import './TaskDetail.scss';
import TextEditor from '../TextEditor/TextEditor';

function TaskDetail() {
  const { currentTask } = useAppSelector((state) => state.tasks);

  if (!currentTask) {
    return (
      <section className="task-detail">
        <Flex w="100%" h="100%" align="center" justify="center" fz='20px'>
          <BsFillCursorFill size='22' style={{marginRight: '5px'}}/> Click on a task to view its details.
        </Flex>
      </section>
    );
  }

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
        <TextEditor value={currentTask.description} id={currentTask.id} />
      </Flex>
    </section>
  );
}

export default TaskDetail;
