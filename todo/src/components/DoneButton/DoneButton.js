import "./DoneButton.scss";
import { Checkbox } from "@chakra-ui/react";
function DoneButton({ onToggleTask, taskId }) {
  return <Checkbox size="lg" title={"Done"} onChange={onToggleTask}></Checkbox>;
}

export default DoneButton;
