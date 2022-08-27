const { getGallons } = require('./paint-calc.js');

test('35ft by 10ft', () => {
  expect(getGallons(36, 10)).toBe(2);
});