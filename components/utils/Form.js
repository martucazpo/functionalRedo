const Input = (props, el) => {
  props.arr.forEach((item) => {
    let input = document.createElement("input");
    input.setAttribute("type", item.type);
    input.setAttribute("name", item.name);
    input.addEventListener("input", props.inputHandler);
    input.required = item.required;
    if (item.value) {
      input.value = item.value;
    } else {
      input.value = "";
    }
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
  form.addEventListener("submit", props.form.submitHandler);
  Input(props, form);
  SubmitBtn(props, form);
  el.append(form);
};

export default Form;
