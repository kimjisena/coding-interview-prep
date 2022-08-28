const { dividePizza } = require('./pizza-party.js');

test('8 people, 2 pizzas, 8 pieces', () => {
  let result = dividePizza(8, 2, 8);

  expect(result.pcsPerPerson).toBe('Each person gets 2 pieces of pizza');
  expect(result.leftOvers).toBe('There are 0 leftover pieces');
});

test('"8" people, 2 pizzas, 8 pieces', () => {
  expect(() => dividePizza("8", 2, 8)).toThrow('All arguments must be of type number');
});