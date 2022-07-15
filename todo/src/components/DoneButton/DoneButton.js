import "./DoneButton.scss";

function DoneButton() {
  return (
    <div title={"Done"} className="label__wrapper">
      <input type="checkbox" id="_checkbox" />
      <label htmlFor="_checkbox" className="label__check">
        <div id="tick_mark"></div>
      </label>
    </div>
  );
}

export default DoneButton;
