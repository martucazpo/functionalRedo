import HeaderModule from "./components/modules/HeaderModule.js";
import AddTaskModule from "./components/modules/AddTaskModule.js";
import { inputArr } from "./js/formArrays.js";
import { uuidv4 } from "./js/uuidv4.js"

const state = {
    id: "",
    task: "",
    tasks: [],
    finished: [],
    isEdit: false
}

const root = document.getElementById("root")

const render = (el) =>{
    el.innerHTML = ""
    const anchorDiv = document.createElement("div")
    el.append(anchorDiv)
    anchorDiv.classList.add("anchor")
    anchorDiv.innerHTML = ""
    HeaderModule(anchorDiv)
    const main = document.createElement("main")
    anchorDiv.append(main)
    main.innerHTML = ""
    AddTaskModule(addFormProps, main)  
}

const handleInput = (e) =>{
    let { name, value } = e.target
    state[name] = value
}

const handleSubmit = (e) =>{
    e.preventDefault()
    let todo = {}
    todo.id = uuidv4()
    todo.task = state.task
    state.tasks.push(todo)
    state.id = ""
    state.task = ""
    document.querySelector("input").value = ""
    render(root)
}

const addFormProps = {
    arr : inputArr,
    inputHandler: handleInput,
    form:{
        type: "add-form",
        submitHandler: handleSubmit,
        submitBtn: {
            classList: "add-task-btn",
            value: "ADD"
        }
    }
}
/*
const editFormProps = {
    inputArr : inputArr,
    handleInput: handleInput,
    value1: state.id,
    form:{
        type: "edit-form",
        submitHandler: handleEdit,
        submitBtn: {
            classList: "edit-task-btn",
            value: "CHANGE"
        }
    }
}

editFormProps.inputArr[0].value = state.task
*/

render(root)
