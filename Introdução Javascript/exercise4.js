/**
 * Exercício 4
 * 
 * Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
 * 
 * // De 0-1 ano: Iniciante
 * // De 1-3 anos: Intermediário
 * // De 3-6 anos: Avançado
 * // De 7 acima: Jedi Master
 */


function experiencia(anos) {
    switch(anos) {
        case anos >=0 && anos <=1:
            return 'Iniciante';
        case anos > 1 && anos <=3:
            return 'Intermediário';
        case anos > 3 && anos <=6:
            return 'Avançado';
        default:
            return 'Jedi Master';
    }
}

var anosEstudo = 7;

var result = experiencia(anosEstudo);

console.log(result);
