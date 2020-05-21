const url = 'https://api.github.com/users/';

const bodyElement = document.querySelector('body');
const inputElement = document.querySelector('input[name=user]');
const buttonElement = document.querySelector('button');

const listElement = document.createElement('ul');

const containerElement = document.createElement('div');
containerElement.setAttribute('class', 'container');

bodyElement.appendChild(containerElement);

function reset() {
  containerElement.innerHTML = '';
  listElement.innerHTML = '';
}

function setLoader() {
  reset();

  const spanElement = document.createElement('span');
  const spanText = document.createTextNode('Carregando...');
  spanElement.appendChild(spanText);
  containerElement.appendChild(spanElement);
}

function showMessageError() {
  reset();

  const spanElement = document.createElement('span');
  const spanText = document.createTextNode('Erro! Usuário não existe na base do Github');
  spanElement.appendChild(spanText);
  spanElement.style.color = 'red';
  spanElement.style.fontWeight = 'bolder';

  containerElement.appendChild(spanElement);
}

function addItemstoList(items) {
  reset();

  for (const item of items) {
    const listItemElement = document.createElement('li');
    const listItemText = document.createTextNode(item);
    listItemElement.appendChild(listItemText);
    listElement.appendChild(listItemElement);
  }

  containerElement.appendChild(listElement);
}

function getUserFromGithub(user) {
  return new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url + user}/repos`);
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('Error!'));
        }
      }
    };
  }));
}

buttonElement.addEventListener('click', () => {
  const user = inputElement.value;

  setLoader();

  getUserFromGithub(user)
    .then((response) => {
      const repositoriesNames = response.map((r) => r.name);
      addItemstoList(repositoriesNames);
      inputElement.value = '';
    })
    .catch((error) => {
      showMessageError();
      console.warn(error);
    });
});
