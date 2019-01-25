describe('Typescript - interfaces', function() {
  const __: any = 'replace me so that the test is passing';
  it('can describe object types', function() {
    interface Person {
      name: string;
    }
    function greet(person: Person) {
      return 'Hi ' + person.name;
    }
    expect(greet({ name: 'John' })).toBe(__);
    // expect(greet({name: 'John', age: 23})).toBe(__);
    expect(greet({ name: 'John', age: 23 } as Person)).toBe(__);
    // expect(greet({nema: 'John', age: 23} as Person)).toBe(__);

    const p = { name: 'John', age: 23 };
    expect(greet(p)).toBe(__);
  });
  it('index signatures', function() {
    interface Person {
      name: string;
      [propName: string]: any;
    }
    function greet(person: Person) {
      return 'Hi ' + person.name;
    }
    expect(greet({ name: 'John', age: 23 })).toBe(__);
  });
  it('can describe function types', function() {
    interface CallbackFn {
      (result: string): string;
    }
    let invokeCallback = function(fn: CallbackFn): any {
      return fn('Hello');
    };

    expect(
      invokeCallback(function(result: string): string {
        return result + ' World!';
      })
    ).toBe(__);

    // expect(invokeCallback(function (result: number): number {
    //   return result;
    // })).toBe(__);
  });
  it('indexable types', function() {
    interface Ages {
      [name: string]: number;
    }
    let ages: Ages = {
      alice: 23,
      bob: 34,
      0: 45
    };
    expect(ages['alice']).toBe(__);
    expect(ages[0]).toBe(__);

    interface Distribution {
      [sum: number]: number;
    }
    let distribution: Distribution = {
      2: 1,
      3: 2,
      12: 1
    };
    expect(distribution[0]).toBe(__);
    expect(distribution[3]).toBe(__);
    // distribution['name'] = 'Sum of 2 dice';
    // expect(distribution['name']).toBe(__);
  });
  it('can describe class types', function() {
    interface PersonInterface {
      name: string;
      greet(): string;
    }
    class Person implements PersonInterface {
      name: string;
      greet(): string {
        return 'Hello ' + this.name;
      }
      constructor(name: string) {
        this.name = name;
      }
    }

    let p: PersonInterface;
    p = new Person('Joe');
    expect(p.greet()).toBe(__);

    p = {
      name: 'John',
      greet: function() {
        return 'Hello ' + this.name;
      }
    };
    expect(p.greet()).toBe(__);

    // p = {
    //   greet: function () {
    //     return 'Hello Paul';
    //   }
    // };
    // expect(p.greet()).toBe(__);
  });

  it('can describe hybrid types', function() {
    interface CacheableFn {
      (param: any): any;
    }
    interface CachedFn extends CacheableFn {
      clearCache(): void;
    }
    function cache(fn: CacheableFn): CachedFn {
      interface Cache {
        [key: string]: any;
      }
      let c: Cache = {};
      let result = <CachedFn>function(param: any): any {
        let x = c[param];
        console.log(x);
        return c.hasOwnProperty(param as string)
          ? c[param as string]
          : (c[param as string] = fn(param));
      };
      result.clearCache = function(): void {
        c = {};
      };
      return result;
    }

    let totalInvocations = 0;
    let cachedSum = cache(function(n: number): any {
      totalInvocations++;
      return n && n + cachedSum(n - 1);
    });

    expect(cachedSum(5)).toBe(__);
    expect(totalInvocations).toBe(__);

    expect(cachedSum(10)).toBe(__);
    expect(totalInvocations).toBe(__);

    cachedSum.clearCache();
    expect(cachedSum(5)).toBe(__);
    expect(totalInvocations).toBe(__);
  });
});
