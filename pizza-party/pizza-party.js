/**
 * @param {number} n Number of people
 * @param {number} pzs Number of pizzas
 * @param {number} pcs Number of pieces per pizza
 * @returns number of pieces per person and number of leftovers
 */

function dividePizza(n, pzs, pcs) {
  let ppp, leftovers;

  if (typeof n !== 'number' || typeof pzs !== 'number' || typeof pcs !== 'number') {
    throw new Error('All arguments must be of type number');
  }
  
  pcs = pzs * pcs;

  ppp = Math.floor(pcs / n);
  leftovers = pcs % n;

  return {
    pcsPerPerson: `Each person gets ${ppp > 1 || ppp === 0 ? ppp + ' pieces': ppp + ' piece'} of pizza`,
    leftOvers: `There are ${leftovers > 1 || leftovers === 0 ? leftovers + ' leftover pieces' : leftovers + ' leftover piece'}`,
  };
}

module.exports = {
  dividePizza,
}
