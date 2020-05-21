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
const inputElement = document.querySelector('input[name=nome]');

const listElement = document.createElement('ul');

function createListItemElement(itemName) {
  const listItemElement = document.createElement('li');
  const listItemtext = document.createTextNode(itemName);
  listItemElement.appendChild(listItemtext);

  return listItemElement;
}

function adicionar() {
  const listItemElement = createListItemElement(inputElement.value);
  listElement.appendChild(listItemElement);
  inputElement.value = '';
}

for (const nome of nomes) {
  const listItemElement = createListItemElement(nome);
  listElement.appendChild(listItemElement);
}

bodyElement.appendChild(listElement);
