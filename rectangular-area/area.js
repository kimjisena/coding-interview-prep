/**
 * @param {number} len Length in feet or meters
 * @param {number} wid Width in feet or meters
 * @param {string} system Measurement system `'imperial'` or `'metric'`
 * @returns area in square feet and square meters
 */

function getArea (len, wid, system) {
  const factor = 0.09290304;
  let sqf, sqm;

  if(typeof len !== 'number' || typeof wid !== 'number') {
    throw new Error('len and wid must be of type number');
  }

  if (system === 'metric') {
    sqm = len * wid;
    sqf = Number((sqm / factor).toFixed(3));
  } else if (system === 'imperial') {
    sqf = len * wid;
    sqm = Number((sqf * factor).toFixed(3));
  } else {
    throw new Error('You must specify system, "imperial" or "metric"')
  }

  return { sqf, sqm, };
}

module.exports = {
  getArea,
};
