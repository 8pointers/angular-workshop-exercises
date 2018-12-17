describe('Typescript - arrays', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand Array.prototype.sort', function() {
    expect([1, 2, 5, 10, 20, 50].sort()).toEqual(__);
    const people = [
      { name: 'First', age: 34 },
      { name: 'Second', age: 56 },
      { name: 'Third', age: 23 },
      { name: 'Fourth', age: 45 }
    ];
    expect(people.sort((p1, p2) => p2.age - p1.age)).toEqual(__);
  });
  it('should understand Array.from', function() {
    expect(Array.from('Hello')).toEqual(__);
    expect(Array.from({ length: 5 })).toEqual(__);
    expect(Array.from({ length: 5 }, (_, i) => i)).toEqual(__);
  });
  it('should understand Array.prototype.map', function() {
    expect([1, 2, 3, 4, 5].map(x => x * x)).toEqual(__);
  });
  it('should understand Array.prototype.filter', function() {
    expect([1, 2, 3, 4, 5].filter(x => x % 2)).toEqual(__);
  });
  it('should understand Array.prototype.reduce', function() {
    const arr = [2, 1, 3, 5, 4];
    expect(arr.reduce((acc, x) => acc + x, 0)).toBe(__);
    expect(arr.reduce((acc, x) => acc * x, 1)).toBe(__);
    expect(arr.reduce((acc, x) => Math.min(acc, x), Infinity)).toBe(__);
    expect(arr.reduce((acc, x) => Math.max(acc, x), -Infinity)).toBe(__);

    const mysteryF1 = fn => xs => arr.reduce((acc, x) => [...acc, fn(x)], []);
    expect(mysteryF1(x => x * x)(arr)).toEqual(__);

    const mysteryF2 = fn => xs =>
      arr.reduce((acc, x) => (fn(x) ? [...acc, x] : acc), []);
    expect(mysteryF2(x => x % 2)(arr)).toEqual(__);
  });
});
