/**
 * @typedef {{price: number, qty: number}} Item
 * @typedef {{subtotal: number, tax: number, total: number}} Checkout
 * 
 * @param {Array<Item>} arr - an array of item objects
 * @returns {Checkout} Subtotal, Tax and Total
 * @exports
 */
function selfCheckOut(arr) {
  const RATE = 5.5 / 100;
  let subtotal, tax, total;
  subtotal = arr.map(item => item.price * item.qty).reduce((acc, price) => acc + price, 0) * 100;
  tax = subtotal * RATE;
  total = subtotal + tax;

  return {
    subtotal: subtotal / 100,
    tax: tax / 100,
    total: total / 100,
  };
}

module.exports = {
  selfCheckOut,
};