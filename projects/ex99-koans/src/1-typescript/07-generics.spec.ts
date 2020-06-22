// tslint:disable:only-arrow-functions
describe('TypeScript :: Generics :: ', function () {
  const __: any = 'replace me so that the test is passing';
  it('should understand generic functions', function () {
    const pipe2 = function <A, B, C>(f: (x: A) => B, g: (x: B) => C): (x: A) => C {
      return x => g(f(x));
      // return x => f(g(x));
    };

    const greet = pipe2(String.fromCharCode, s => `Hello ${s}!`);

    const greeting: string = greet(65);
    expect(greeting).toBe(__);
    // const greeting2: number = greet(65);
    // const greeting3 = greet('A');
  });
  it('should understand generic classes', function () {
    class Maybe<A> {
      static of<A>(value: A): Maybe<A> {
        return new Maybe(value);
      }
      get isNothing() {
        return this.value == null;
      }
      map<B>(f: (x: A) => B): Maybe<B> {
        return this.isNothing ? new Maybe<B>(null) : new Maybe(f(this.value));
      }
      fold<B>(f: (x: A) => B): B {
        return f(this.value);
      }
      constructor(private value: A) {}
    }
    const maybe = function <A, B>(v: B, f: (x: A) => B, m: Maybe<A>) {
      return m.isNothing ? v : m.fold(f);
    };
    const safeGetName = function (person: { name?: string; age: number }): Maybe<string> {
      return Maybe.of(person.name).map(name => `Mr. ${name}`);
    };
    expect(maybe('N/A', s => s, safeGetName({ name: 'Myamoto Musashi', age: 23 }))).toBe(__);
    expect(maybe('N/A', s => s, safeGetName({ age: 23 }))).toBe(__);
  });
});
