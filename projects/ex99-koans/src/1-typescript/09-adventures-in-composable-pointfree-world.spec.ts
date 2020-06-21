describe('TypeScript :: adventures in pointfree world :: ', function () {
  const __: any = 'replace me so that the test is passing';

  const add = a => b => a + b;
  const mod = a => b => a % b;
  const gte = a => b => b >= a;
  const pick = propertyName => object => object[propertyName];
  const isTruthy = x => !!x;
  const not = f => x => !f(x);
  const flip = f => a => b => f(b)(a);
  const map = f => xs => xs.map(f);
  const filter = f => xs => xs.filter(f);
  const pipe = (...fs) => x => fs.reduce((acc, f) => f(acc), x);
  const compose = (...fs) => x => fs.reduceRight((acc, f) => f(acc), x);

  it('should understand pointfree', function () {
    const inc = add(1);
    expect(inc(123)).toBe(__);
  });
  it('should understand compose', function () {
    const getStreet = compose(pick('street'), pick('address'));
    const person = {
      name: 'Myamoto',
      age: 23,
      address: {
        street: 'Ninja Way',
        postcode: 'XX'
      }
    };
    expect(getStreet(person)).toBe(__);

    const isOdd = compose(isTruthy, flip(mod)(2));
    expect(isOdd(123)).toBe(__);
    expect(isOdd(124)).toBe(__);
    const isEven = not(isOdd);
    expect(isEven(123)).toBe(__);
    expect(isEven(124)).toBe(__);
  });
  it('should understand pipe', function () {
    const getStreet = pipe(pick('address'), pick('street'));
    const person = {
      name: 'Myamoto',
      age: 23,
      address: {
        street: 'Ninja Way',
        postcode: 'XX'
      }
    };
    expect(getStreet(person)).toBe(__);
  });
  it('should understand pointfree - graduation', function () {
    const overdraftAccountHolderNames = compose(map(pick('name')), filter(compose(not(gte(0)), pick('balance'))));
    const accounts = [
      { id: 1, name: 'First', balance: 123.45 },
      { id: 1, name: 'Second', balance: 0 },
      { id: 1, name: 'Third', balance: -12.34 },
      { id: 1, name: 'Fourth', balance: 67.89 },
      { id: 1, name: 'Fifth', balance: -1000 }
    ];
    expect(overdraftAccountHolderNames(accounts)).toEqual(__);
  });
});
