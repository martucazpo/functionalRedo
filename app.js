import HeaderModule from "./components/modules/HeaderModule.js";
import AddTaskModule from "./components/modules/AddTaskModule.js";
import RenderTodosModule from "./components/modules/RenderTodosModule.js";
import { inputArr, editArr, editDeleteBtnArr } from "./js/arrays.js";
import { uuidv4 } from "./js/uuidv4.js";

const state = {
  id: "",
  task: "",
  tasks: [],
  finished: [],
  isEdit: false,
};

const root = document.getElementById("root");

const render = (el) => {
  const renderListProps = {
    arr: state.tasks,
    class: "render-todos-list",
    isEdit: state.isEdit,
    editId: state.id,
    btnsArr: editDeleteBtnArr,
    key: "task",
  };
  renderListProps.btnsArr[0].eventHandler = handleDelete;
  renderListProps.btnsArr[1].eventHandler = toggleEdit;

  const addFormProps = {
    arr: inputArr,
    inputHandler: handleInput,
    form: {
      type: "add-form",
      submitHandler: handleSubmit,
      submitBtn: {
        classList: "add-task-btn",
        value: "ADD",
      },
    },
  };
  const editFormProps = {
    arr: editArr,
    inputHandler: handleInput,
    form: {
      type: "edit-form",
      submitHandler: handleEdit,
      submitBtn: {
        classList: "edit-task-btn",
        value: "CHANGE",
      },
    },
  };
  editFormProps.arr[0].value = state.task;

  el.innerHTML = "";
  const anchorDiv = document.createElement("div");
  el.append(anchorDiv);
  anchorDiv.classList.add("anchor");
  anchorDiv.innerHTML = "";
  HeaderModule(anchorDiv);
  const main = document.createElement("main");
  anchorDiv.append(main);
  main.innerHTML = "";
  AddTaskModule(addFormProps, main);
  RenderTodosModule(renderListProps, editFormProps, main);
};

const handleInput = (e) => {
  let { name, value } = e.target;
  state[name] = value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  let todo = {};
  todo.id = uuidv4();
  todo.task = state.task;
  state.tasks.push(todo);
  state.id = "";
  state.task = "";
  document.querySelector("input").value = "";
  render(root);
};
const handleDelete = (todo) => {
  let id = todo.id;
  let allTheOthers = state.tasks.filter((task) => task.id !== id);
  let theChosenOne = state.tasks.filter((task) => task.id === id);
  state.finished.push(theChosenOne);
  state.tasks = allTheOthers;
  render(root);
};
const toggleEdit = (todo) => {
  state.id = todo.id;
  state.task = todo.task;
  state.isEdit = true;
  render(root);
};
const handleEdit = (e) => {
  e.preventDefault();
  let youveChanged = state.tasks.map((todo) => {
    if ((todo.id = state.id)) {
      todo.task = state.task;
    }
    return todo;
  });
  state.tasks = youveChanged;
  state.id = "";
  state.task = "";
  render(root);
};

render(root);
