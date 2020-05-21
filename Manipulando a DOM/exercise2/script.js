/**
 * Exercício 1
 *
 * Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
 * vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
 * aparecer na tela.
 *
 * Toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma
 * cor aleatória gerada pela função getRandomColor.
 *
 */


// Cria botão
function criaBotao() {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');

  // Define texto do botão
  const buttonText = document.createTextNode('Adicionar');

  // Adiciona texto para o botão
  buttonElement.appendChild(buttonText);

  return buttonElement;
}

// Cria elemento container aonde serão inseridos as divs em formato quadrado
function criaContainer() {
  const containerElement = document.createElement('div');
  containerElement.setAttribute('class', 'container');
  containerElement.style.margin = '10px 0';

  return containerElement;
}

// Cria elemento div em formato quadrado e fundo vermelho
function criaDivQuadrada() {
  const divElement = document.createElement('div');
  divElement.style.width = '100px';
  divElement.style.height = '100px';
  divElement.style.backgroundColor = 'red';

  return divElement;
}

// Pega cor aleatória em hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const bodyElement = document.querySelector('body');
const buttonElement = criaBotao();
const containerElement = criaContainer();

// Adiciona Event listener de click no botão
buttonElement.addEventListener('click', () => {
  const divElement = criaDivQuadrada();

  divElement.addEventListener('mouseover', () => {
    divElement.style.backgroundColor = getRandomColor();
  });

  containerElement.appendChild(divElement);
});

// Adiciona os elementos botão e container dentro de body
bodyElement.append(buttonElement, containerElement);
