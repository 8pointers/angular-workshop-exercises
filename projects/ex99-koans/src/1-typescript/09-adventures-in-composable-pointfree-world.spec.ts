// tslint:disable:only-arrow-functions
describe('TypeScript :: adventures in pointfree world :: ', function () {
  const __: any = 'replace me so that the test is passing';

  const add = a => b => a + b;
  const mod = a => b => a % b;
  const gte = a => b => b >= a;
  const pick = propertyName => object => object[propertyName];
  const not = x => !x;
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

    const isOdd = compose(not, not, flip(mod)(2));
    expect(isOdd(123)).toBe(__);
    expect(isOdd(124)).toBe(__);
    const isEven = compose(not, isOdd);
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
    const accountHolderNamesInOverdraft = compose(
      map(pick('name')),
      filter(compose(compose(not, gte(0)), pick('balance'), pick('account')))
    );
    const people = [
      { id: 1, name: 'First', account: { balance: 123.45 } },
      { id: 2, name: 'Second', account: { balance: 0 } },
      { id: 3, name: 'Third', account: { balance: -12.34 } },
      { id: 4, name: 'Fourth', account: { balance: 67.89 } },
      { id: 5, name: 'Fifth', account: { balance: -1000 } }
    ];
    expect(accountHolderNamesInOverdraft(people)).toEqual(__);
  });
});
