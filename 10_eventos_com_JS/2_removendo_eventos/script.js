let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

function msg() {
  console.log("clicou aqui!");
}

btn.addEventListener("click", msg);

btn2.addEventListener("click", function () {
  btn.removeEventListener("click", msg);
});
