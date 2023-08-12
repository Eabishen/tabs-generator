const inputx = document.querySelector("#inputlang");
const tabsWrapper = document.querySelector("#tabwrap");
const test = document.querySelector('#test')



inputx.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 || e.keyCode == 188 ) {
        e.preventDefault()
        
    var kCd = e.keyCode || e.which;
    if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
        let xkCd = getKeyCode(this.value);
        test.textContent = xkCd;
        
    }
    let inputValue = inputx.value.trim();
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
