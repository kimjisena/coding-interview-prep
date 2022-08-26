const {greeter} = require('./hello');

test('hello test', () => {
  expect(greeter()).toBe('hello, world');
});