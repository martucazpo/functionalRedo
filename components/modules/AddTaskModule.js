import Form from "../utils/Form.js";

const AddTaskModule = (props, el) => {
  const section = document.createElement("section");
  section.classList.add("add-task-section");
  Form(props, section);
  el.append(section);
};

export default AddTaskModule;
