/**
 * Exercício 1
 *
 * A partir do seguinte vetor:
 *
 * var nomes = ["Diego", "Gabriel", "Lucas"];
 *
 * Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
 *
 * ● Diego
 * ● Gabriel
 * ● Lucas
 */


const nomes = ['Diego', 'Gabriel', 'Lucas'];
const bodyElement = document.querySelector('body');

const listElement = document.createElement('ul');

for (const nome of nomes) {
  const listItemElement = document.createElement('li');
  const listItemtext = document.createTextNode(nome);

  listItemElement.appendChild(listItemtext);

  listElement.appendChild(listItemElement);
}

bodyElement.appendChild(listElement);
