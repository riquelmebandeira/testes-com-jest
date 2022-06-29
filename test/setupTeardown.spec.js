const adventure = require('../src/setupTeardown');

/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.
*/

describe('4 - Verifica que a quantidade restante de aventureiros', () => {
  beforeEach(() => {
    adventure.randomAttack();
  });

  afterEach(() => {
    console.log(adventure.specialists.map((specialist) => specialist.nome));
  });

  test('É 5 após a primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('É 4 após a segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('É 3 após a terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('É 2 após a quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('É 1 após a quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
