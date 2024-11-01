function createItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createSubElement("remove-item btn-link text-red", "button");
  const icon = createSubElement("fa-solid fa-xmark", "i");
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
}

// function createButton(classes) {
// function createSubElement(classes, e_type) {
//   const icon = document.createElement("i");
//   icon.className = classes;
//   return icon;
// }//
const button = document.createElement("button");
button.className = classes;
const icon = createSubElement("fa-solid fa-xmark", "i");
button.appendChild(icon);
return button;

function createSubElement(classes, e_type) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

createItem("orange");
createItem("mango");
