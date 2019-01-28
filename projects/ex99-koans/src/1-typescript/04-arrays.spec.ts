describe('TypeScript :: arrays :: ', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand array literals', function() {
    const array = [1, 'Two', { name: 'Three' }];
    expect(array).toEqual(__);
  });
  it('should understand Array.from', function() {
    expect(Array.from('Hello')).toEqual(__);
    expect(Array.from({ '0': 'First', '1': 'Second', '2': 'Third', '3': 'Fourth', '4': 'Fifth', length: 3 })).toEqual(__);
    expect(Array.from({ length: 10 }, (_, i) => i)).toEqual(__);
  });
  it('should understand destructuring', function() {
    const [, firstName, lastName] = 'Mr. Myamoto Musashi'.split(' ');
    expect(firstName).toBe(__);
    expect(lastName).toBe(__);
  });
  it('should understand rest operator', function() {
    const [title, ...names] = 'Mr. Myamoto Musashi'.split(' ');
    expect(title).toBe(__);
    expect(names).toEqual(__);
  });
  it('should understand spread operator', function() {
    const [title, ...names] = 'Mr. Myamoto Musashi'.split(' ');
    const newName = [title, ...names.reverse(), '!'].join(' ');
    expect(newName).toBe(__);
  });
  it('should understand Array.prototype.sort', function() {
    expect([1, 2, 100, 5, 10, 20, 50].sort()).toEqual(__);
    expect([1, 2, 100, 5, 10, 20, 50].sort((a, b) => a - b)).toEqual(__);
    const people = [{ name: 'First', age: 34 }, { name: 'Second', age: 56 }, { name: 'Third', age: 23 }, { name: 'Fourth', age: 45 }];
    expect(people.sort((p1, p2) => p2.age - p1.age)).toEqual(__);
  });
  it('should understand Array.prototype.map', function() {
    expect([1, 2, 3, 4, 5].map(x => x * x)).toEqual(__);
    const people = [{ name: 'First', age: 12 }, { name: 'Second', age: 23 }, { name: 'Third', age: 34 }];
    expect(people.map(({ name, ...rest }) => ({ name: `Mr. ${name}`, ...rest }))).toEqual(__);
  });
  it('should understand Array.prototype.flatMap', function() {
    const numbers = [1, 2, 3];
    const letters = ['a', 'b', 'c', 'd'];
    expect(numbers.flatMap(n => letters.map(l => [n, l]))).toEqual(__);

    const people = [
      { id: 1, name: 'First', addresses: [{ street: '1 Ninja Way', postcode: '555-XX' }] },
      {
        id: 1,
        name: 'Second',
        addresses: [
          { street: '22 Ninja Way', postcode: '555-YY' },
          { street: '23 Ninja Way', postcode: '555-YY' },
          { street: '24 Ninja Way', postcode: '555-YY' }
        ]
      },
      { id: 1, name: 'Third', addresses: [{ street: '33 Ninja Way', postcode: '555-ZZ' }, { street: '34 Ninja Way', postcode: '555-ZZ' }] }
    ];
    expect(people.map(person => person.addresses)).toEqual(__);
    expect(people.flatMap(person => person.addresses)).toEqual(__);
  });
  it('should understand Array.prototype.filter', function() {
    expect([1, 2, 3, 4, 5].filter(x => x % 2)).toEqual(__);
    const people = [{ name: 'First', age: 12 }, { name: 'Second', age: 23 }, { name: 'Third', age: 34 }];
    expect(people.filter(({ age }) => age >= 21)).toEqual(__);
  });
  it('should understand Array.prototype methods chaining', function() {
    const ngClass = classes =>
      Object.entries(classes)
        .filter(([, isOn]) => isOn)
        .map(([className]) => className)
        .join(' ');
    const hidden = false;
    const cookie = 'sessionId:blah';
    const balance = 1234.56;
    const errors = [];
    expect(ngClass({ hidden, loggedIn: cookie, vip: balance > 1000, error: errors.length })).toBe(__);
  });
  it('should understand Array.prototype.reduce', function() {
    const arr = [2, 1, 3, 5, 4];
    expect(arr.reduce((acc, x) => acc + x, 0)).toBe(__);
    expect(arr.reduce((acc, x) => acc * x, 1)).toBe(__);
    expect(arr.reduce((acc, x) => Math.min(acc, x), Infinity)).toBe(__);
    expect(arr.reduce((acc, x) => Math.max(acc, x), -Infinity)).toBe(__);

    const mysteryF1 = fn => xs => xs.reduce((acc, x) => [...acc, fn(x)], []);
    expect(mysteryF1(x => x * x)(arr)).toEqual(__);

    const mysteryF2 = fn => xs => xs.reduce((acc, x) => (fn(x) ? [...acc, x] : acc), []);
    expect(mysteryF2(x => x % 2)(arr)).toEqual(__);

    const addUp = transactions =>
      Object.values(
        transactions.reduce(
          ({ [accountId]: current, ...rest }, { accountId, amount }) => ({
            ...rest,
            [accountId]: { accountId, amount: amount + ((current && current.amount) || 0) }
          }),
          {}
        )
      );
    const someTransactions = [
      { id: 1, accountId: 1, amount: 10 },
      { id: 2, accountId: 2, amount: 20 },
      { id: 3, accountId: 1, amount: 30 },
      { id: 4, accountId: 3, amount: 40 },
      { id: 5, accountId: 2, amount: 50 },
      { id: 6, accountId: 1, amount: 60 }
    ];
    expect(addUp(someTransactions)).toEqual(__);
  });
  it('should understand arrays - graduation', function() {
    const people = [
      { name: 'First', age: 16, balance: 300 },
      { name: 'Second', age: 18, balance: 500 },
      { name: 'Third', age: 22, balance: 400 },
      { name: 'Fourth', age: 14, balance: 1000 },
      { name: 'Fifth', age: 24, balance: 100 },
      { name: 'Sixth', age: 26, balance: 200 }
    ];
    const result = people
      .filter(({ age }) => age >= 18)
      .map(({ balance }) => balance * 0.07)
      .reduce((acc, x) => acc + x, 0);
    expect(result).toBe(__);
  });
});
