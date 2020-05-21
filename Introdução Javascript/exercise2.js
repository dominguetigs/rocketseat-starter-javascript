/**
 * Exercício 2
 *
 * Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
 */


function pares(x, y) {
    var evenNumbers = [];

    while (x <= y) {
        if (x % 2 === 0) {
            evenNumbers.push(x);
        }
        x++;
    }

    return evenNumbers;
}

var evenNumbers = pares(32, 321);

console.log(evenNumbers);
