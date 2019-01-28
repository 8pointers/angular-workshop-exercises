describe('TypeScript :: Decorators :: ', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand method decorators', function() {
    function log(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
      const method = descriptor.value;
      descriptor.value = function(...args) {
        console.log('Invoking', propertyName, 'with arguments:', ...args);
        return method.apply(this, arguments);
      };
    }
    class Person {
      @log
      reply(name: string) {
        return 'Hello ' + name;
      }
    }
    const p = new Person();
    spyOn(console, 'log');

    const result = p.reply('John');

    expect(result).toBe(__);
    expect(console.log).toHaveBeenCalledWith(__);
  });
  it('should understand decorator factories', function() {
    function slow(durationInMillis: number) {
      return function(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
        const method = descriptor.value;
        descriptor.value = function(...args) {
          const tsStart = Date.now();
          const result = method.apply(this, args);
          const duration = Date.now() - tsStart;
          if (duration > durationInMillis) {
            console.log('Slow method invocation:', propertyName, 'duration:', duration);
          }
          return result;
        };
      };
    }

    class Person {
      @slow(100)
      shouldBeQuick() {
        return 'quick';
      }

      @slow(100)
      shouldBeSlow() {
        const tsEnd = Date.now() + 101;
        while (Date.now() < tsEnd) {}
        return 'slow';
      }
    }

    const p = new Person();
    expect(p.shouldBeQuick()).toBe(__);
    expect(p.shouldBeSlow()).toBe(__);
  });
});
