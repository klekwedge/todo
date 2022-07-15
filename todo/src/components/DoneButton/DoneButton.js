import "./DoneButton.scss";
// taskId
function DoneButton({onToggleTask, taskId}) {

  // const test = () =>
  
  return (
    <div title={"Done"} className="label__wrapper" >
      <input className="done__checkbox" type="checkbox" id={taskId} />
      <label htmlFor={taskId} className="label__check" onClick={onToggleTask}>
        <div id="tick_mark"></div>
      </label>
    </div>
  );
}

export default DoneButton;
