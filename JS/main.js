let link = document.querySelector(".links");
let span = document.querySelectorAll(".icon span");
let list = document.querySelector(".container ul");

console.log(span);

let x = false;

link.addEventListener("click", function () {
  if (!x) {
    span[1].style.width = "100%";
    list.style.display = "block";
    x = !x;
  } else {
    span[1].style.width = "60%";
    list.style.display = "none";
    x = !x;
  }
});
