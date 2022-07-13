import "./TodoList.scss";

function TodoList() {
  return (
    <>
      <ul class="todo__list">
        <li class="todo__item">
          <span className="label">111</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i className="material-icons"></i>
            </button>
            <button className="btn-picto" type="button" title="Delete">
              <i className="material-icons">delete</i>
            </button>
          </div>
        </li>
      </ul>
      <p className="emptylist">Your todo list is empty.</p>
    </>
  );
}

export default TodoList;
