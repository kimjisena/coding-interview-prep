const { getArea } = require('./area.js');

test('20ft by 15ft', () => {
  let area = getArea(20, 15, 'imperial');

  expect(area.sqf).toBe(300);
  expect(area.sqm).toBe(27.871);
});

test('12m by 9m', () => {
  let area = getArea(12, 9, 'metric');

  expect(area.sqf).toBe(1162.502);
  expect(area.sqm).toBe(108);
});

test('"20" ft by "15" ft', () => {
  expect(() => getArea("20", "15")).toThrow('len and wid must be of type number');
});

test('"20" ft by "15" ft', () => {
  expect(() => getArea(20, 15)).toThrow('You must specify system, "imperial" or "metric"');
});