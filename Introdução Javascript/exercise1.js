/**
 * Exercício 1
 *
 * Crie uma função que dado o objeto a seguir:
 *
 * var endereco = {
 *     rua: "Rua dos pinheiros",
 *     numero: 1293,
 *     bairro: "Centro",
 *     cidade: "São Paulo",
 *     uf: "SP"
 * };
 *
 * Retorne o seguinte conteúdo:
 *
 * O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
 * nº 1293.

 */


const endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP',
};

function getUserInfo() {
  let message = 'O usuário mora em {cidade} / {uf}, no bairro {bairro}, na rua "{rua}" com nº {numero}.';

  for (const key of Object.keys(endereco)) {
    const regex = new RegExp(`\\{${key}}`);
    message = message.replace(regex, endereco[key]);
  }

  return message;
}

const userInfo = getUserInfo();

console.log(userInfo);
