function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");

  function insertHTML() {
    const cleanBtn = document.querySelector("#clear");
    cleanBtn.insertAdjacentHTML("beforebegin", "<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("afterend", "<h2>insertAdjustHTML</h2>");
  }

  insertHTML();

  h1.textContent = "insertAdjustElement";
  //apply insertAdjacentElement can only apply once to the same element
  filter.insertAdjacentElement("beforebegin", h1);
  const h1clone = h1cloneNode(true);
  filter.insertAdjacentElement("afterend", h1);
}
insertElement();

function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("beforebegin", "insertAdjustText");
  item.insertAdjacentText("afterend", "insertAdjustText");
}

insertText();

function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "insertBefore";
  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}
insertBeforeItem();

function insertAfter(newE, existingE) {
  existingE.parentElement.insertBefore(newE, existingE.nextSibling);
}

const li = document.createElement("li");
li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(4)");
insertAfter(li, firstItem);
