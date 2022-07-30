import List from "../utils/List.js"

const FinishedHeader = (props,e) =>{
    let div = document.createElement("div")
    div.classList.add("finished-list-header")
    const h2 = document.createElement("h2")
    if(props.arr.length < 1){
         h2.innerText = "Lets find something to do and get to work!"
    } else if (props.arr.length === 1) {
        h2.innerText = `${props.arr.length} task completed!` 
    } else {
        h2.innerText = `${props.arr.length} tasks completed!`
    }
    div.append(h2)
   e.append(div)
}


const RenderFinishedTodos = (props,el) =>{
    const section = document.createElement("section")
    section.classList.add("finished-task-section")
    FinishedHeader(props, section)
    List(props,null,section)
    el.append(section)
}

export default RenderFinishedTodos