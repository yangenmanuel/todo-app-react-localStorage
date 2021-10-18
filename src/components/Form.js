import React from "../../_snowpack/pkg/react.js";
import {v1 as uuid} from "../../_snowpack/pkg/uuid.js";
import swal from "../../_snowpack/pkg/sweetalert.js";
export default function Form(props) {
  const inputHandler = (e) => {
    props.setTextInput(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {id: uuid(), title: props.textInput, done: false}
    ]);
    props.setTextInput("");
    document.querySelector("#input").focus();
    swal({
      title: "Task added succesfully!",
      icon: "success"
    });
  };
  const handleStatus = (e) => {
    props.setStatus(e.target.value);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", {
    onSubmit: submitTodo
  }, /* @__PURE__ */ React.createElement("input", {
    id: "input",
    type: "text",
    placeholder: "Add a todo",
    onChange: inputHandler,
    value: props.textInput,
    required: true
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "submit"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    className: "bi bi-plus-lg",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
  }))), /* @__PURE__ */ React.createElement("select", {
    onChange: handleStatus
  }, /* @__PURE__ */ React.createElement("option", {
    value: "all"
  }, "All"), /* @__PURE__ */ React.createElement("option", {
    value: "completed"
  }, "Completed"), /* @__PURE__ */ React.createElement("option", {
    value: "uncompleted"
  }, "Uncompleted"))));
}
