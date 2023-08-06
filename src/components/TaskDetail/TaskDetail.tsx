import { Flex, Heading, Badge, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import useCategoryTask from '../../hooks/useCategoryTask';
import './TaskDetail.scss';
import { useAppSelector } from '../../hooks/redux-hook';

function TaskDetail() {
  const { currentTask } = useAppSelector((state) => state.tasks);

  return (
    <section className="task-detail">
      <Heading as="h2" fontWeight="400" fontSize="32px" borderBottom="1px solid rgba(0, 0, 0, 0.3)" mb="10px">
        Task details:
      </Heading>
      {currentTask ? (
        <Flex flexDirection="column" gap="2px" position="relative">
          <Flex justifyContent="space-between" alignItems="center" mb="10px">
            <Heading as="h3" fontWeight="500" fontSize="20px" lineHeight="24px">
              {currentTask.taskName}
            </Heading>

            <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
              {currentTask.category ? (
                <Badge size="8xl" variant="outline" colorScheme="green" cursor="pointer">
                  {currentTask.category}
                </Badge>
              ) : (
                <Button p='5px' size="8xl" colorScheme="green">
                  Add category
                </Button>
              )}
            </Heading>
          </Flex>

          <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
            <span>Status:</span> {currentTask.complete ? 'Done' : 'Active'}
          </Heading>

          <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
            <span>Deadline:</span> {currentTask.deadline ? currentTask.deadline : 'No deadline'}
          </Heading>

          <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
            <span>Description:</span> {currentTask.description ? currentTask.description : 'Not description'}
          </Heading>

          <Heading as="h4" fontWeight="400" fontSize="16px">
            <span>Task creation date:</span> {currentTask.creationDate[0].slice(0, -5)}.
            {currentTask.creationDate[0].slice(8)}({currentTask.creationDate[1]})
          </Heading>
        </Flex>
      ) : (
        <Flex flexDirection="column">
          <Flex alignItems="center" gap="5px" mb="20px">
            <ArrowBackIcon />
            <h3>Please, choose task</h3>
          </Flex>
          <h3>You have not selected a task</h3>
        </Flex>
      )}
    </section>
  );
}

export default TaskDetail;
