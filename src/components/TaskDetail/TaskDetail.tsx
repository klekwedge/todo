import { Flex, Heading, Badge, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useAppSelector } from '../../hooks/redux-hook';
import './TaskDetail.scss';

function TaskDetail() {
  const { currentTask } = useAppSelector((state) => state.tasks);

  if (!currentTask) {
    return null;
  }

  return (
    <section className="task-detail">
      <Heading
        as="h3"
        fontWeight="500"
        fontSize="28px"
        p="0px 0px 10px 0px"
        lineHeight="24px"
        borderBottom="1px solid rgba(0, 0, 0, 0.3)"
        mb="10px"
      >
        {currentTask.taskName}
      </Heading>

      <Flex justifyContent="space-between" mb="10px">
        <Flex flexDirection="column" gap="2px" position="relative">
          <Heading as="h4" mb="5px" fontWeight="400" fontSize="18px">
            <span>Status:</span> {currentTask.complete ? 'Done' : 'Active'}
          </Heading>

          <Heading as="h4" mb="5px" fontWeight="400" fontSize="18px">
            <span>Deadline:</span> {currentTask.deadline ? currentTask.deadline : 'No deadline'}
          </Heading>

          <Heading as="h4" mb="5px" fontWeight="400" fontSize="18px">
            <span>Description:</span> {currentTask.description ? currentTask.description : 'Not description'}
          </Heading>

          <Heading as="h4" fontWeight="400" fontSize="18px">
            <span>Task creation date:</span> {currentTask.creationDate[0].slice(0, -5)}.
            {currentTask.creationDate[0].slice(8)} ({currentTask.creationDate[1]})
          </Heading>
        </Flex>
        <Heading as="h4" mb="5px" fontWeight="400" fontSize="18px">
          {currentTask.category ? (
            <Badge size="8xl" variant="outline" colorScheme="green" cursor="pointer">
              {currentTask.category}
            </Badge>
          ) : (
            <Button p="5px" size="8xl" colorScheme="green">
              Add category
            </Button>
          )}
        </Heading>
      </Flex>
    </section>
  );
}

export default TaskDetail;
