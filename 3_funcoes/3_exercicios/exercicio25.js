function numero(n) {
  for (let i = n; i >= 0; i--) {
    if (i % 2 === 0) {
      console.log(`Os numeros pares de 0 a ${n}`);
      console.log(i);
    }
  }
}

numero(50);
