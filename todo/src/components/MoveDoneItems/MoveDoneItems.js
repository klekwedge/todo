import "./MoveDoneItems.scss";

function MoveDoneItems({ completedTasksAtTheEnd, setCompletedTasksAtTheEnd }) {
  return (
    <div
      className="move-task"
      onClick={() => setCompletedTasksAtTheEnd(!completedTasksAtTheEnd)}
    >
      <input
        className="move-task__input"
        id="move"
        type="checkbox"
        name="todosort"
      />
      <label htmlFor="move">Move completed tasks to the end?</label>
    </div>
  );
}

export default MoveDoneItems;
