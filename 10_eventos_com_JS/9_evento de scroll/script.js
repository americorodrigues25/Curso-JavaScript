let btn = document.getElementById("btn");

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 120) {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.width = "150px";
    btn.style.height = "35px";
    btn.style.borderRadius = "10px";
    btn.style.border = "none";
  }
});

btn.addEventListener("click", function () {
  alert("Clicou aqui no botão!");
});
