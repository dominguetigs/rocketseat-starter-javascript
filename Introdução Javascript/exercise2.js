/**
 * Exercício 2
 *
 * Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
 */


function pares(x, y) {
  const evenNumbers = [];

  let starter = x;
  while (starter <= y) {
    if (x % 2 === 0) {
      evenNumbers.push(x);
    }
    starter += 1;
  }

  return evenNumbers;
}

const evenNumbers = pares(32, 321);

console.log(evenNumbers);
