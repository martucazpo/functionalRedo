const HeaderModule = (el) => {
  const section = document.createElement("section");
  section.classList.add("header-section");
  const h1 = document.createElement("h1");
  h1.innerText = "Things to do";
  section.append(h1);
  el.append(section);
};

export default HeaderModule;
