import List from "../utils/List.js"


const RenderFinisedTodos = (props,el) =>{
    const section = document.createElement("section")
    section.classList.add("finished-task-section")
    List(props,null,section)
    el.append(section)
}

export default RenderFinisedTodos