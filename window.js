//on page load

//document.querySelector("hi").textContent = "Hello world";
//window.onload = function () {
//console.log("window loaded");
//document.querySelector("hi").textContent = "Hello world";
//};

window.addEventListener("load", function () {
  console.log("page loaded");
});

window.addEventListener("DOM loaded", function () {
  console.log("DOM loaded");
});

console.log("hello world");

//resize
window.addEventListener("resize", function () {
  document.querySelector("h1").textContent =
    'Resized to ${window.innerWidth}  *{ window.innerHeight}';
});

//scroll event
window.addEventListener("scroll", function () {
    console.log(`scrolled to ${window.scrollX} * ${window.scrollY}`);
    if (window.scrollY>50) {
        document.querySelector("h1").style.backgroundColor = "red";
    }
)};

//focus & blur
window.addEventListener("focus", function () {
    document.querySelectorAll("p").forEach((p) => (p.style.color ="red"));
});

window.addEventListener("blur", function () {
    document.querySelectorAll("p").forEach((p) => (p.style.color ="black"));
});

