const inputx = document.querySelector("#inputlang");
const tabsWrapper = document.querySelector("#tabwrap");
const test = document.querySelector("#test");

var getKeyCode = function (str) {
    return str.charCodeAt(str.length - 1);
}


inputx.addEventListener("keyup", (e) => {
    let ck = e.keyCode || e.which
    ck = getKeyCode(ck)
    test.textContent = `${ck} is actual and key code is ${e.keyCode}` 
  
   
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
