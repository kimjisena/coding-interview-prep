const { isValid } = require('./valid-paren.js');

test('()', () => {
  expect(isValid('()')).toBe(true);
});

test('{{}}()[{}]', () => {
  expect(isValid('{{}}()[{}]')).toBe(true);
});

test('{][}', () => {
  expect(isValid('{][}')).toBe(false);
});

test('()(', () => {
  expect(isValid('()(')).toBe(false);
});