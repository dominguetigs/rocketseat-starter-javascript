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


var nomes = ['Diego', 'Gabriel', 'Lucas'];
var bodyElement = document.querySelector('body');
var inputElement = document.querySelector('input[name=nome]');

var listElement = document.createElement('ul');

for (var nome of nomes) {
    var listItemElement = createListItemElement(nome);
    listElement.appendChild(listItemElement);
}

bodyElement.appendChild(listElement);

function createListItemElement(itemName) {
    var listItemElement = document.createElement('li');
    var listItemtext = document.createTextNode(itemName);
    listItemElement.appendChild(listItemtext);

    return listItemElement;
}

function adicionar() {
    var listItemElement = createListItemElement(inputElement.value);
    listElement.appendChild(listItemElement);
    inputElement.value = '';
}
