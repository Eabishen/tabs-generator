const inputx = document.querySelector("#inputlang");
const tabsWrapper = document.querySelector("#tabwrap");
const test = document.querySelector('#test')
inputx.addEventListener("keydown", (e) => {
  if (e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 108 || e.which == 108 || e.which == 188) {
    e.preventDefault()
    let inputValue = inputx.value.trim();
    test.textContent = inputValue;
    if (inputValue !== '') {
      tabGenerator(inputValue);
      inputx.value = "";
    }
  }
});

const tabGenerator = (value) => {
  const tab = document.createElement("div");
  const closebtn = document.createElement("button");
  const icon = document.createElement("i");
  tab.classList = "tabs";
  tab.textContent = value;

  closebtn.type = "button";
  icon.classList = "fa-solid fa-x";

  closebtn.appendChild(icon);
  tab.appendChild(closebtn);
  tabsWrapper.appendChild(tab);


  closebtn.addEventListener("click", () => {
    tabsWrapper.removeChild(tab);
  });
};
