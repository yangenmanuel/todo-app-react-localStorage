import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {render} from "../_snowpack/pkg/react-dom.js";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getStoredTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    storeTodos();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.done === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.done === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const storeTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getStoredTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let storedData = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedData);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Todo App"), /* @__PURE__ */ React.createElement(Form, {
    textInput,
    setTextInput,
    todos,
    setTodos,
    status,
    setStatus
  }), /* @__PURE__ */ React.createElement(TodoList, {
    todos,
    setTodos,
    filteredTodos,
    filteredTodos
  }));
}
render(/* @__PURE__ */ React.createElement(App, null), document.querySelector("#app"));
