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

var listElement = document.createElement('ul');

for (var nome of nomes) {
    var listItemElement = document.createElement('li');
    var listItemtext = document.createTextNode(nome);

    listItemElement.appendChild(listItemtext);

    listElement.appendChild(listItemElement);
}

bodyElement.appendChild(listElement);
