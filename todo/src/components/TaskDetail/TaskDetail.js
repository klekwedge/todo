import "./TaskDetail.scss";

function TaskDetail({ currentTask }) {
  console.log(currentTask);
  return (
    <section className="task-detail">
      <h2 className="task-detail__title">Task details </h2>
      <h3 className="task-detail__name">{currentTask.nameTask}</h3>
      <h3 className="task-detail__name">
        {currentTask.complete ? "Done" : "Active"}
      </h3>
      <h3 className="task-detail__name">
        {currentTask.category ? currentTask.category : "Not category"}
      </h3>
      <h3 className="task-detail__name">
        {currentTask.description ? currentTask.description : "Not description"}
      </h3>
    </section>
  );
}

export default TaskDetail;
