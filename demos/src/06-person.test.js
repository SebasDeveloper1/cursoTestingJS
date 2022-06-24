const Person = require('./06-person');

let person;
beforeEach(() => {
  person = new Person('Sebas', 45, 1.7);
});

describe('Test for person', () => {
  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();

    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();

    expect(imc).toBe('normal');
  });
});
