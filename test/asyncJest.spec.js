const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'
*/

describe('1 - O retorno do telefonema é:', () => {
  test('"Oi" ao receber o parâmetro "true"', () => expect(answerPhone(true))
    .resolves.toEqual('Oi!'));

  test('um erro ao receber o parâmetro "false"', () => expect(answerPhone(false))
    .rejects.toEqual(new Error('Infelizmente não podemos atender...')));
});
