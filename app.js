import HeaderModule from "./components/modules/HeaderModule.js";
import AddTaskModule from "./components/modules/AddTaskModule.js";
import RenderTodosModule from "./components/modules/RenderTodosModule.js";
import RenderFinishedTodos from "./components/modules/RenderFinishedTodos.js";
import {
  inputArr,
  editArr,
  editDeleteBtnArr,
  redoTaskArr,
} from "./js/arrays.js";
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
  const listProps = {
    arr: state.tasks,
    class: "render-todos-list",
    isEdit: state.isEdit,
    editId: state.id,
    btnsArr: editDeleteBtnArr,
    key: "task",
  };
  Object.assign(listProps.btnsArr[0], { eventHandler: handleDelete });
  Object.assign(listProps.btnsArr[1], { eventHandler: toggleEdit });

  const finishedListProps = {
    arr: state.finished,
    class: "render-finished-list",
    isEdit: null,
    editId: null,
    btnsArr: redoTaskArr,
    key: "task",
  };
  Object.assign(finishedListProps.btnsArr[0], { eventHandler: handleRedo });

  const formProps = {
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

  const changeFormProps = {
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
  changeFormProps.arr[0].value = state.task;

  el.innerHTML = "";
  const anchorDiv = document.createElement("div");
  const main = document.createElement("main");
  el.append(anchorDiv);
  anchorDiv.classList.add("anchor");
  anchorDiv.innerHTML = "";
  HeaderModule(anchorDiv);
  anchorDiv.append(main);
  main.innerHTML = "";
  AddTaskModule(formProps, main);
  RenderTodosModule(listProps, changeFormProps, main);
  RenderFinishedTodos(finishedListProps, main);
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
  let theChosenOne = state.tasks.filter((task) => task.id === id)[0];
  if(state.finished.length < 6){
    state.finished.unshift(theChosenOne);
  } else {
    state.finished.pop()
    state.finished.unshift(theChosenOne)
  }
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

const handleRedo = (item) => {
  let id = item.id;
  let allTheOthers = state.finished.filter((todo) => todo.id !== id);
  let theChosenOne = state.finished.filter((todo) => todo.id === id)[0];
  state.tasks.push(theChosenOne);
  state.finished = allTheOthers;
  render(root);
};

render(root);
