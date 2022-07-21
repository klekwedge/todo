import { Flex, Badge } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import "./TaskDetail.scss";

function TaskDetail({ currentTask }) {
  // console.log(currentTask);

  const categoryTask = () => {
    switch (currentTask.category) {
      case "personal":
        return (
          <Badge colorScheme="green" padding="5px" color="black">
            Personal
          </Badge>
        );
      case "work":
        return (
          <Badge colorScheme="red" padding="5px" color="black">
            Work
          </Badge>
        );
      case "study":
        return (
          <Badge colorScheme="purple" padding="5px" color="black">
            Study
          </Badge>
        );
      case "other":
        return (
          <Badge colorScheme="blue" padding="5px" color="black">
            Other
          </Badge>
        );
      default:
        return null;
    }
  };

  const detail = () => {
    return (
      <Flex flexDirection="column" gap="2px" position="relative">
        <h3 className="task-detail__name">{currentTask.nameTask}</h3>
        <h3 className="task-detail__name">
          {currentTask.complete === "true" ? "Done" : "Active"}
        </h3>
        <h3 className="task-detail__name">
          {currentTask.category ? categoryTask() : "Not category"}
        </h3>
        <h3 className="task-detail__name">
          Description:{" "}
          {currentTask.description
            ? currentTask.description
            : "Not description"}
        </h3>
      </Flex>
    );
  };

  return (
    <section className="task-detail">
      <h2 className="task-detail__title">Task details </h2>
      {currentTask.nameTask ? (
        detail()
      ) : (
        <Flex alignItems="center" gap="5px">
          <ArrowBackIcon />
          <h3>Please, choose task</h3>
        </Flex>
      )}
    </section>
  );
}

export default TaskDetail;
