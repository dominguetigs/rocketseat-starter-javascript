const url = 'https://api.github.com/users/';

const bodyElement = document.querySelector('body');
const inputElement = document.querySelector('input[name=user]');
const buttonElement = document.querySelector('button');

const listElement = document.createElement('ul');

bodyElement.appendChild(listElement);

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

function addItemstoList(items) {
  listElement.innerHTML = '';

  for (const item of items) {
    const listItemElement = document.createElement('li');
    const listItemText = document.createTextNode(item);
    listItemElement.appendChild(listItemText);
    listElement.appendChild(listItemElement);
  }
}

buttonElement.addEventListener('click', () => {
  const user = inputElement.value;

  getUserFromGithub(user)
    .then((response) => {
      const repositoriesNames = response.map((r) => r.name);
      addItemstoList(repositoriesNames);
    })
    .catch((error) => {
      console.warn(error);
    });
});
