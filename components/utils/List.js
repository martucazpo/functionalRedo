import Button from "./Button.js";
import Form from "./Form.js";

const List = (props, formProps, el) => {
  const ul = document.createElement("ul");
  ul.classList.add(props.class);
  ul.innerHTML = "";
  props.arr.forEach((item) => {
    const li = document.createElement("li");
    if (props.isEdit && props.editId === item.id) {
      Form(formProps, li);
      ul.append(li);
    } else if (props.btnsArr.length > 0) {
      li.innerText = item[props.key];
      props.btnsArr.forEach((btn) => Button(btn, li, item));
      ul.append(li);
    } else {
      li.innerText = item[props.key];
      ul.append(li)
    }
  });
  el.append(ul);
};

export default List;
