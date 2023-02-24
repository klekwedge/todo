import { Flex, Heading, Badge } from "@chakra-ui/react";
import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import useCategoryTask from "../../hooks/useCategoryTask";

import "./TaskDetail.scss";
import { ITask } from "../../types/types";

interface TaskDetailProps {
  currentTask: ITask | undefined;
}

function TaskDetail({ currentTask }: TaskDetailProps) {
  if (!currentTask) {
    return null;
  }

  const categoryTask = useCategoryTask(currentTask.category);

  const showDetails = () => (
    <Flex flexDirection="column" gap="2px" position="relative">
      <Flex justifyContent="space-between" alignItems="center" mb="10px">
        <Heading as="h3" fontWeight="500" fontSize="20px" lineHeight="24px">
          {currentTask.taskName}
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
        <span>Status:</span>
        {currentTask.complete ? "Done" : "Active"}
      </Heading>

      <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
        <span>Deadline:</span>
        {currentTask.deadline ? currentTask.deadline : "No deadline"}
      </Heading>

      <Heading as="h4" mb="5px" fontWeight="400" fontSize="16px">
        <span>Description:</span>
        {currentTask.description ? currentTask.description : "Not description"}
      </Heading>

      <Heading as="h4" fontWeight="400" fontSize="16px">
        <span>Task creation date:</span>
        {currentTask.creationDate[0].slice(0, -5)}.
        {currentTask.creationDate[0].slice(8)}({currentTask.creationDate[1]})
      </Heading>
    </Flex>
  );

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
      {currentTask.taskName ? (
        showDetails()
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