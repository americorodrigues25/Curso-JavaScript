window.addEventListener("keydown", function (e) {
  if (e.key == "v") {
    console.log('Apertou a tecla "v"');
  } else if (e.key == "Enter") {
    console.log("Apertou enter");
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    console.log("Soltou enter");
  }
});
