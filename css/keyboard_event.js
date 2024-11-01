// a. keypress
const itemInput = document.getElementById("item-input");
const onKeyPress = () => {
  console.log("keypress");
};

itemInput.addEventListener("keypress", onKeyPress);

// b. onkeydown
const onKeyDown = () => {
  console.log("keydown");
  //check key code
  if (e.key === "Enter") {
    alert(" enter");
  }
  if (e.keyCode === 13) {
    alert("pressed enter");
  }
  if (e.code === "Digit1") {
    console.log("pressed 1");
  }
  if (e.repeat) {
    console.log("you are holding down " + e.key);
  }
  console.log("Shift" + e.shiftKey);
  console.log("Alt" + e.altKey);
  console.log("Control" + e.ctrlKey);
  if (e.shiftKey && e.key === "K");
  console.log("you pressed shift and k");
};
itemInput.addEventListener("keydown", onKeyDown);
// c. onkeyup
const onkeyup = () => {
  console.log("keyup");
};
itemInput.addEventListener("keyup", onkeyup);
