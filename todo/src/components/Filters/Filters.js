import { useState, useEffect } from "react";
import { Flex, Skeleton, Heading, Button } from "@chakra-ui/react";
import "./Filters.scss";

import TodoTaskItem from "../TodoTaskItem/TodoTaskItem";
import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";
import FilterButton from "../FilterButton/FilterButton";

function Filters() {
  const [tasks, setTasks] = useState([]);

  const [completedTasksAtTheEnd, setCompletedTasksAtTheEnd] = useState(false);
  const [filterTasks, setFilterTasks] = useState("default");

  // const filterTasksFunc = () => {
  //   if (completedTasksAtTheEnd) {
  //     return tasks
  //       .map((task) => (
  //         <TodoTaskItem
  //           task={task}
  //           key={task.id}
  //           toggleTask={toggleTask}
  //           removeTask={removeTask}
  //           tasks={tasks}
  //           setTasks={setTasks}
  //           setDetailOpen={setTaskDetailIsOpen}
  //           taskDetailIsOpen={taskDetailIsOpen}
  //           setCurrentTask={setCurrentTask}
  //         />
  //       ))
  //       .sort((task) => (task.complete ? 1 : -1));
  //   }

  //   return tasks.map((task) => (
  //     <TodoTaskItem
  //       task={task}
  //       key={task.id}
  //       toggleTask={toggleTask}
  //       removeTask={removeTask}
  //       tasks={tasks}
  //       setTasks={setTasks}
  //       setDetailOpen={setTaskDetailIsOpen}
  //       taskDetailIsOpen={taskDetailIsOpen}
  //       setCurrentTask={setCurrentTask}
  //     />
  //   ));
  // };

  return (
    <section className="filters">
      <Heading as="h2" fontWeight="400" mb="10px">
        Filters
      </Heading>

      <Flex gap="5px" mb="20px" flexDirection="column">
        <Heading fontSize="28px" as="h3" fontWeight="300" mb="5px">
          Task status
        </Heading>
        <Flex gap="10px" mb="5px">
          <FilterButton
            label={"All"}
            buttonColorScheme={"blue"}
            filterRule={"default"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Active"}
            buttonColorScheme={"red"}
            filterRule={"active"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Done"}
            buttonColorScheme={"green"}
            filterRule={"done"}
            setFilterTasks={setFilterTasks}
          />
        </Flex>

        <Heading fontSize="28px" as="h3" fontWeight="300" mb="5px">
          Category
        </Heading>
        <Flex gap="10px" mb="5px">
          <FilterButton
            label={"All"}
            buttonColorScheme={"blue"}
            filterRule={"default"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Active"}
            buttonColorScheme={"red"}
            filterRule={"active"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Done"}
            buttonColorScheme={"green"}
            filterRule={"done"}
            setFilterTasks={setFilterTasks}
          />
        </Flex>

        <Heading fontSize="28px" as="h3" fontWeight="300" mb="5px">
          Time
        </Heading>
        <Flex gap="10px">
          <FilterButton
            label={"All"}
            buttonColorScheme={"blue"}
            filterRule={"default"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Morning"}
            buttonColorScheme={"red"}
            filterRule={"active"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Noon"}
            buttonColorScheme={"green"}
            filterRule={"done"}
            setFilterTasks={setFilterTasks}
          />
          <FilterButton
            label={"Evening"}
            buttonColorScheme={"blue"}
            filterRule={"done"}
            setFilterTasks={setFilterTasks}
          />
        </Flex>
      </Flex>

      <Button>Select filters</Button>

      {/* <MoveDoneItems
        completedTasksAtTheEnd={completedTasksAtTheEnd}
        setCompletedTasksAtTheEnd={setCompletedTasksAtTheEnd}
      /> */}
    </section>
  );
}

export default Filters;
