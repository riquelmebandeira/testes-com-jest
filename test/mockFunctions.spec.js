const { add, subtract, multiply, divide, power, factorial } = require('../src/mockFunctions');

jest.mock('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.
*/

describe('3 - Verifica as funções e os mocks', () => {
  add.mockImplementation((a, b) => a + b);
  subtract.mockImplementation((a, b) => a - b);
  multiply.mockImplementation((a, b) => a * b);
  divide.mockImplementation((a, b) => a / b);

  power.mockImplementation((a, b) => {
    if (a === 0 || b === 0) {
      return 1;
    }
    let pow = a;
    for (let i = 1; i < b; i += 1) {
      pow *= a;
    }
    return pow;
  });

  factorial.mockImplementation((a) => {
    let fact = 1;
    for (let i = 1; i <= a; i += 1) {
      fact *= i;
    }
    return fact;
  });

  test('Função add', () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(8, 37)).toEqual(45);
    expect(add(-11, 25)).toEqual(14);
    expect(add(13, -188)).toEqual(-175);
    expect(add(7, 26)).toEqual(33);
  });

  test('Função subtract', () => {
    expect(subtract(899, 35)).toEqual(864);
    expect(subtract(-17, 333)).toEqual(-350);
    expect(subtract(45, 97)).toEqual(-52);
    expect(subtract(23, -108)).toEqual(131);
    expect(subtract(-133, -29)).toEqual(-104);
  });

  test('Função multiply', () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(multiply(0, 5)).toEqual(0);
    expect(multiply(-4, 9)).toEqual(-36);
    expect(multiply(-12, -7)).toEqual(84);
    expect(multiply(19, 23)).toEqual(437);
  });

  test('Função divide', () => {
    expect(divide(169, 13)).toEqual(13);
    expect(divide(-1900, 5)).toEqual(-380);
    expect(divide(42, 7)).toEqual(6);
    expect(divide(729, 243)).toEqual(3);
    expect(divide(1331, 11)).toEqual(121);
  });

  test('Função power', () => {
    expect(power(10, 2)).toEqual(100);
    expect(power(2, 10)).toEqual(1024);
    expect(power(5, 5)).toEqual(3125);
    expect(power(1, 10)).toEqual(1);
    expect(power(0, 0)).toEqual(1);
  });

  test('Função factorial', () => {
    expect(factorial(5)).toEqual(120);
    expect(factorial(10)).toEqual(3628800);
    expect(factorial(3)).toEqual(6);
    expect(factorial(8)).toEqual(40320);
    expect(factorial(2)).toEqual(2);
  });
});
