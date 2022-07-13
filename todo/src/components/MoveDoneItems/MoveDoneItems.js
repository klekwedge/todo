import "./MoveDoneItems.scss";

function MoveDoneItems() {
  return (
    <div>
      <input id="move" type="checkbox" name="todosort" />
      <label htmlFor="move">Move done items at the end?</label>
    </div>
  );
}

export default MoveDoneItems;
