const Button = (props, el, iter) => {
    const button = document.createElement("button");
    button.classList.add(props.class);
    button.innerText = props.text;
    button.addEventListener("click", ()=> props.eventHandler(iter));
    el.append(button);
};

export default Button;
