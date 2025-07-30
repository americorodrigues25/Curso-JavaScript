try {
  let a = 2 + b;
} catch (e) {
  console.log(e);
} finally {
  console.log('executou')
}

console.log("teste");

// finally não é muito utilizado