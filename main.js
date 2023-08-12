const inputx = document.querySelector("#inputlang");
const tabsWrapper = document.querySelector("#tabwrap");
const test = document.querySelector("#test");

var getKeyCode = function (str) {
    return str.charCodeAt(str.length - 1);
}


inputx.addEventListener("keyup", (e) => {
    var kCd = e.keyCode || e.which;
    if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
        kCd = getKeyCode(this.value);
    }
    if(kCd == 13 || kCd == 188){
        if(inputx.value == ','){
            inputx.value = '' 
            console.log('removed');
        } else{
             console.log('true');

        } 

        if(!inputx.value == ""){

            tabGenerator(inputx.value)
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
