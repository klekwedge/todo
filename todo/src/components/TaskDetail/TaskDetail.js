import { Flex, Stack } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Skeleton, Heading, Badge } from "@chakra-ui/react";
import { useCategoryTask } from "../../hooks/useCategoryTask";

import "./TaskDetail.scss";

function TaskDetail({ currentTask }) {
  const categoryTask = useCategoryTask(currentTask.category);

  const showDetails = () => {
    return (
      <Flex flexDirection="column" gap="2px" position="relative">
        <Flex justifyContent="space-between" alignItems="center" mb='10px'>
          <Heading as="h3" fontWeight="500" fontSize="20px" lineHeight="24px">
            {currentTask.nameTask}
          </Heading>

          <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
            {currentTask.category ? (
              categoryTask
            ) : (
              <Badge
                size="8xl"
                variant="outline"
                colorScheme="green"
                cursor="pointer"
              >
                Add category
              </Badge>
            )}
          </Heading>
        </Flex>

        <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
          <span>Status:</span>{" "}
          {currentTask.complete ? "Done" : "Active"}
        </Heading>

        <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
          <span>Deadline:</span>{" "}
          {currentTask.deadline ? currentTask.deadline : "No deadline"}
        </Heading>

        <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
          <span>Description:</span>{" "}
          {currentTask.description
            ? currentTask.description
            : "Not description"}
        </Heading>

        <Heading as="h4" fontWeight="400" fontSize="16px">
          <span>Task creation date:</span>{" "}
          {currentTask.creationDate[0].slice(0, -5)}.
          {currentTask.creationDate[0].slice(8)} ({currentTask.creationDate[1]})
        </Heading>
      </Flex>
    );
  };

  return (
    <section className="task-detail">
      <Heading
        as="h2"
        fontWeight="400"
        fontSize="32px"
        borderBottom="1px solid rgba(0, 0, 0, 0.3)"
        mb="10px"
      >
        Task details:
      </Heading>
      {currentTask.nameTask ? (
        showDetails()
      ) : (
        <Flex flexDirection="column">
          <Flex alignItems="center" gap="5px" mb="20px">
            <ArrowBackIcon />
            <h3>Please, choose task</h3>
          </Flex>
          <Stack>
            <Skeleton height="15px" />
            <Skeleton height="15px" />
            <Skeleton height="15px" />
            <Skeleton height="15px" />
          </Stack>
        </Flex>
      )}
    </section>
  );
}

export default TaskDetail;
