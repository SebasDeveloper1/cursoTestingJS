// assertions o matchers
test('test obj', () => {
  const data = { name: 'Sebastian' };
  data.lastname = 'Pedroza';

  expect(data).toEqual({ name: 'Sebastian', lastname: 'Pedroza' });
});

test('null', () => {
  const data = null;

  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('Strings', () => {
  expect('Sebas').toMatch(/eba/);
});

test('list / arrays', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(array).toContain(3);
});
