const inputx = document.querySelector("#inputlang");
const tabsWrapper = document.querySelector("#tabwrap");
const test = document.querySelector("#test");



document.getElementById("inputlang").onkeyup = function (e) {
    

    if (inputx.value.endsWith(",") || inputx.value.endsWith(" ") || e.key == "," || e.key == 'Enter') {
        inputx.value = inputx.value.replace(/,/g, '').replace(/\s+/g, '');
        if(inputx.value == ''){
            return
        }
        tabGenerator(inputx.value);
        inputx.value = ''
      }
  
};

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
