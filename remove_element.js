function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

removeClearButton();

//remove child from parent
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

removeFirstItem();

function removeItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li;nth-child(${itemNumber}");
  ul.removeChild(li);
}
//removeItem(3);

function removeItem2(itemNumber) {
  //case 2 : delete item from parent by index

  const ul = document.querySelector("ul");
  const li = document.querySelector("ul");
  ul.removeChild(li);
}

removeItem2(3);

function removeItem3(itemNumber) {
  //case 3 :delete item dorect by index
  const li = document.querySelector("li");
  li[itemNumber - 1].remove();
}

removeItem3(3);

function removeItem4(itemNumber) {
  //case 4 : delete item direct by element
  document.querySelectorAll("li")[itemNumber - 1].remove();
}

removeItem4(3);
