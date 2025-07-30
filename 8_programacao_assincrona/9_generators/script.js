function* criadoID() {
  let id = 0;
  while(true) {
    yield id+=3;
  }
}


let criarID = criadoID();

console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);