import React from "../../_snowpack/pkg/react.js";
import swal from "../../_snowpack/pkg/sweetalert.js";
export default function TodoItem(props) {
  const deleteTodo = () => {
    swal({
      title: "Carefull!",
      text: "Are you sure you want to delete it?",
      buttons: ["Cancel", "I know what I`m doing"],
      icon: "warning"
    }).then((res) => {
      if (res) {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
        swal({
          title: "Success!",
          text: "Task was deleted successfully!",
          icon: "success"
        });
      }
    });
  };
  const toggleDone = () => {
    props.setTodos(props.todos.map((el) => {
      if (el.id == props.todo.id) {
        return {
          ...el,
          done: !el.done
        };
      }
      return el;
    }));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    style: {textDecoration: props.todo.done ? "line-through" : "none"}
  }, /* @__PURE__ */ React.createElement("p", {
    className: "txt"
  }, props.todo.title), /* @__PURE__ */ React.createElement("div", {
    className: "actions"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: toggleDone,
    className: "check"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-check2",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
  }))), /* @__PURE__ */ React.createElement("button", {
    onClick: deleteTodo,
    className: "delete"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-trash",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  }))))));
}
