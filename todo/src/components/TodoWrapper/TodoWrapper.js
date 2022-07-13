import "./TodoWrapper.scss";

function TodoWrapper() {
  return (
    <main id="todolist">
      <h1 class='todo__title'>Todo List </h1>
      <h2>Get things done, one item at a time.</h2>

      <div name="todolist" tag="ul">
        <li>
          <span className="label">111</span> {/* {{item.label}} */}
          <div className="actions">
            <button className="btn-picto" type="button">
              <i className="material-icons"></i> {/* {{item.label}} */}
            </button>
            <button className="btn-picto" type="button" title="Delete">
              <i className="material-icons">delete</i>
            </button>
          </div>
        </li>
      </div>
      <button label="Move done items at the end?" name="todosort" />

      <p className="emptylist">Your todo list is empty.</p>

      <form name="newform">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" name="newitem" id="newitem" />
        <button type="submit">Add item</button>
      </form>
    </main>
  );
}

export default TodoWrapper;
