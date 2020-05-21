var url = 'https://api.github.com/users/';

var bodyElement = document.querySelector('body');
var inputElement = document.querySelector('input[name=user]');
var buttonElement = document.querySelector('button');

var listElement = document.createElement('ul');

bodyElement.appendChild(listElement);

buttonElement.addEventListener('click', function () {
    var user = inputElement.value;

    getUserFromGithub(user)
        .then(function (response) {
            var repositoriesNames = response.map(function (r) {
                return r.name;
            });
            addItemstoList(repositoriesNames);
        })
        .catch(function (error) {
            console.warn(error);
        });
});

function addItemstoList(items) {
    listElement.innerHTML = '';

    for (var item of items) {
        var listItemElement = document.createElement('li');
        var listItemText = document.createTextNode(item);
        listItemElement.appendChild(listItemText);
        listElement.appendChild(listItemElement);
    }
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


