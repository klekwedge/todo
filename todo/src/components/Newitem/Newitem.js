import "./Newitem.scss";

function Newitem() {
  return (
    <form name="newform">
    <label htmlFor="newitem">Add to the todo list</label>
    <input type="text" name="newitem" id="newitem" />
    <button type="submit">Add item</button>
  </form>
  );
}

export default Newitem;
