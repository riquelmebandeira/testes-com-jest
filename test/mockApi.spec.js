const api = require('../src/mockApi');
const USER_MOCK = require('./mocks/user.json');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.
*/

describe('2 - Verifica se ao chamar a função fetchURL', () => {
  const fetchURL = jest.spyOn(api, 'fetchURL');

  test('O usuário retornado é o Tunico', async () => {
    fetchURL.mockResolvedValue(USER_MOCK);

    fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    });
  });
});
