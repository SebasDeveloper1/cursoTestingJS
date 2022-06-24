describe('set', () => {
  beforeAll(() => {
    // Carga un setup antes de ejecutar todas las pruebas dentro de su scope
    console.log('beforeAll 1');
  });

  afterAll(() => {
    // Carga un setup despues de ejecutar todas las pruebas dentro de su scope
    console.log('afterAll 1');
  });

  beforeEach(() => {
    // Carga un setup antes de ejecutar cada una de las pruebas
    console.log('beforeEach');
  });

  afterEach(() => {
    // Carga un setup despues de ejecutar cada una de las pruebas
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 2).toBe(3);
  });

  describe('set 2', () => {
    beforeAll(() => {
      // Carga un setup antes de ejecutar todas las pruebas dentro de su scope
      console.log('beforeAll 2');
    });

    afterAll(() => {
      // Carga un setup despues de  ejecutar todas las pruebas dentro de su scope
      console.log('afterAll 2');
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 3).toBe(4);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(2 + 2).toBe(4);
    });
  });
});
