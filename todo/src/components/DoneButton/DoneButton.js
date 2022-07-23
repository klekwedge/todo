import "./DoneButton.scss";
// import { Checkbox } from "@chakra-ui/react";
function DoneButton({ onToggleTask, taskId }) {
  return (
    <>
      {/* <Checkbox title={"Done"} onChange={onToggleTask}></Checkbox> */}
      <div title={"Done"} className="label__wrapper">
        <input className="done__checkbox" type="checkbox" id={taskId} />
        <label htmlFor={taskId} className="label__check" onClick={onToggleTask}>
          <div id="tick_mark"></div>
        </label>
      </div>
    </>
  );
}

export default DoneButton;
