/**
 * @requires self-checkout.js
 */

const { selfCheckOut } = require('./self-checkout.js');

test('hahaha', () => {
  expect(selfCheckOut([{price: 25, qty: 2}, {price: 10, qty: 1}, {price: 4, qty: 1}]).subtotal).toBe(64.00);
  expect(selfCheckOut([{price: 25, qty: 2}, {price: 10, qty: 1}, {price: 4, qty: 1}]).tax).toBe(3.52);
  expect(selfCheckOut([{price: 25, qty: 2}, {price: 10, qty: 1}, {price: 4, qty: 1}]).total).toBe(67.52);
});