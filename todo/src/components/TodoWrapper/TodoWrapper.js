import "./TodoWrapper.scss";
import TodoList from "../TodoList/TodoList";
import Newitem from "../Newitem/Newitem";
import MoveDoneItems from "../MoveDoneItems/MoveDoneItems";

function TodoWrapper() {
  return (
    <main id="todolist">
      <h1 class="todo__title">Todo List </h1>
      <h2>Get things done, one item at a time.</h2>

      <TodoList />

      <MoveDoneItems />

      <Newitem />
    </main>
  );
}

export default TodoWrapper;
