const Input = (props, el) => {
  props.arr.forEach((item) => {
    let input = document.createElement("input");
    input.setAttribute("type", item.type);
    input.setAttribute("name", item.name);
    input.addEventListener("input", props.inputHandler);
    input.required = item.required;
    item.value ? (input.value = item.value) : (input.value = "");
    el.append(input);
  });
};

const SubmitBtn = (props, el) => {
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.classList.add(props.form.submitBtn.classList);
  button.innerText = props.form.submitBtn.value;
  el.append(button);
};

const Form = (props, el) => {
  const form = document.createElement("form");
  props.form.type === "add-form"
    ? form.addEventListener("submit", props.form.submitHandler)
    : form.addEventListener("submit", (e) =>
        props.form.submitHandler(e, value1)
      );
  Input(props, form);
  SubmitBtn(props, form);
  el.append(form);
};

export default Form;
