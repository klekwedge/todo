import { useState, useEffect } from "react";
import { Flex, Skeleton, Heading } from "@chakra-ui/react";
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
      <Heading as="h2" fontWeight="400" mb='20px'>
        Filters
      </Heading>

      <Flex gap="5px" mb="20px">
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
      
      <MoveDoneItems
        completedTasksAtTheEnd={completedTasksAtTheEnd}
        setCompletedTasksAtTheEnd={setCompletedTasksAtTheEnd}
      />
    </section>
  );
}

export default Filters;
