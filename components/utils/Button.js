const Button = (props, el) => {
    const button = document.createElement("button");
    button.classList.add(props.class);
    button.innerText = props.text;
    button.addEventListener("click", () => props.eventHandler(props.value1));
    el.append(button);
};

export default Button;
