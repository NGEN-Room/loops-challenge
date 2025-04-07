const loops = require('../loops');

test('countUpTo', () => {
  expect(loops.countUpTo(5)).toEqual([1, 2, 3, 4, 5]);
});

test('evenNumbers', () => {
  expect(loops.evenNumbers(10)).toEqual([2, 4, 6, 8, 10]);
});

test('sumWithWhile', () => {
  expect(loops.sumWithWhile(5)).toBe(15);
});

test('factorial', () => {
  expect(loops.factorial(5)).toBe(120);
});

test('countdown', () => {
  expect(loops.countdown(5)).toEqual([5, 4, 3, 2, 1]);
});

test('evenOrOddLabels', () => {
  expect(loops.evenOrOddLabels(5)).toEqual(["odd", "even", "odd", "even", "odd"]);
});

test('firstDivisibleBy3And5', () => {
  expect(loops.firstDivisibleBy3And5(10, 30)).toBe(15);
});

test('primeNumbers', () => {
  expect(loops.primeNumbers(10)).toEqual([2, 3, 5, 7]);
});

test('multiplicationTable', () => {
  expect(loops.multiplicationTable(3)).toEqual([
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
  ]);
});