import List from "../utils/List.js"

const RenderTodosModule = (props, formProps, el) =>{
    const section = document.createElement("section")
    section.classList.add("render-todos-section")
    List(props, formProps, section)
    el.append(section)
}

export default RenderTodosModule