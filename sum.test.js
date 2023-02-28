
const  countItems  = require('./countItems');

  describe('countItems', () => {
    test('deve retornar a quantidade correta de itens em um array', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = countItems(arr);
      expect(result).toEqual(5);
    });
  });