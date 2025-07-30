const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(15);
  }, 5000);
});

const p2 = Promise.resolve(12);

const p3 = new Promise((resolve, reject) => {
  resolve(10);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

/*O método Promise.all() é utilizado para executar múltiplas promessas em paralelo e aguardar até que todas sejam resolvidas. Ele recebe um array de promessas como argumento*/
