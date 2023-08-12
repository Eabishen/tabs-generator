const inputx = document.querySelector("#inputlang");
const tabsWrapper = document.querySelector("#tabwrap");

inputx.addEventListener("keydown", (e) => {
  if (e.keyCode == 13 || e.keyCode == 188) {
    tabGenerator(inputx.value);
    inputx.value == "," && (inputx.value = "")
    inputx.value = ""
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

  value = "";

  closebtn.addEventListener("click", () => {
    tabsWrapper.removeChild(tab);
  });
};
