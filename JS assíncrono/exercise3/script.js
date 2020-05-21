var url = 'https://api.github.com/users/';

var bodyElement = document.querySelector('body');
var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('button');

var listElement = document.createElement('ul');

var containerElement = document.createElement('div');
containerElement.setAttribute('class', 'container');

bodyElement.appendChild(containerElement);

buttonElement.addEventListener('click', function () {
    var user = inputElement.value;

    setLoader();

    getUserFromGithub(user)
        .then(function (response) {
            var repositoriesNames = response.map(function (r) {
                return r.name;
            });
            addItemstoList(repositoriesNames);
            inputElement.value = '';
        })
        .catch(function (error) {
            showMessageError();
            console.warn(error);
        });
});

function setLoader() {
    reset();

    var spanElement = document.createElement('span');
    var spanText = document.createTextNode('Carregando...');
    spanElement.appendChild(spanText);
    containerElement.appendChild(spanElement);
}

function showMessageError() {
    reset();

    var spanElement = document.createElement('span');
    var spanText = document.createTextNode('Erro! Usuário não existe na base do Github');
    spanElement.appendChild(spanText);
    spanElement.style.color = 'red';
    spanElement.style.fontWeight = 'bolder';

    containerElement.appendChild(spanElement);
}

function addItemstoList(items) {
    reset();

    for (var item of items) {
        var listItemElement = document.createElement('li');
        var listItemText = document.createTextNode(item);
        listItemElement.appendChild(listItemText);
        listElement.appendChild(listItemElement);
    }

    containerElement.appendChild(listElement);
}

function reset() {
    containerElement.innerHTML = '';
    listElement.innerHTML = '';
}

function getUserFromGithub(user) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url + user + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Error!');
                }
            }
        }
    });
}


