/**
 * Exercício 3
 *
 * Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade
 * "Javascript" e retorna um booleano true/false caso exista ou não.
 */


function temHabilidade(skills, skill) {
  return skills.indexOf(skill) !== -1;
}

const skills = ['Javascript', 'ReactJS', 'React Native'];

const result = temHabilidade(skills, 'Javascript');

console.log(result);
