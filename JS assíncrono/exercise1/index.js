/**
 * Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
 * segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
 * idade o resultado deve cair no .then, caso contrário, no .catch
 */


function checkAge(age) {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  }));
}

checkAge(18)
  .then(() => {
    console.log('Maior ou igual a 18.');
  })
  .catch(() => {
    console.log('Menor que 18.');
  });
