/**
 * @param {number} len Length of the ceiling
 * @param {number} wid Width of the ceiling
 * @returns Number of gallons of paint required
 */
function getGallons (len, wid) {
  let gallons = null;

  let factor = 350;
  let area = len * wid;
  gallons = Math.ceil(area / factor);
  
  return gallons;
}

module.exports = {
  getGallons,
};