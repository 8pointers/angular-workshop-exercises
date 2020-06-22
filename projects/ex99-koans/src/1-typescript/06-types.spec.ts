// tslint:disable:only-arrow-functions
describe('TypeScript :: Types :: ', function () {
  const __: any = 'replace me so that the test is passing';
  it('should understand inference', function () {
    let first = true;
    first = false;
    expect(first).toBe(__);
    // first = 1;

    let second: boolean | number = true;
    second = 1;
    expect(second).toBe(__);
    // second = 'Hello';

    let third: any = true;
    third = 1;
    expect(third).toBe(__);
    third = {};
    expect(third).toEqual(__);

    const names = ['First', 'Second', 'Third'];
    expect(names.map(x => 'Mr. ' + x)).toEqual(__);
    // expect(names.map(x => 3 - x)).toEqual(__);
  });
  it('should understand interfaces define the shape of the object', function () {
    interface Person {
      name: string;
      age?: number;
    }
    const greet = (person: Person) => `Hi ${person.name} you are ${person.age || 21}`;
    expect(greet({ name: 'First', age: 23 })).toBe(__);
    expect(greet({ name: 'Second' })).toBe(__);
    // expect(greet({ age: 23 })).toBe(__);
    // expect(greet({ name: 'Fourth', spouse: 'First' })).toBe(__);
  });
  it('should understand function types', function () {
    type NumberFn = (x: number, y: number) => number;
    const invoke = function (f: NumberFn, a: number, b: number) {
      return f(a, b);
    };
    expect(invoke((a, b) => a + b, 123, 45)).toBe(__);
    // expect(invoke((a, b) => a.length + b.length, '123', '45')).toBe(__);
  });
});
