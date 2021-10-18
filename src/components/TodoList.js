import React from "../../_snowpack/pkg/react.js";
import TodoItem from "./TodoItem.js";
export default function TodoList(props) {
  return /* @__PURE__ */ React.createElement("ul", null, props.filteredTodos.map((todo) => {
    return /* @__PURE__ */ React.createElement(TodoItem, {
      key: todo.id,
      todos: props.todos,
      setTodos: props.setTodos,
      todo
    });
  }));
}
