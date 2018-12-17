describe('Decorators', function() {
  const __: any = 'replace me so that the test is passing';
  it('has method decorators', function() {
    function log(
      target: any,
      propertyName: string,
      descriptor: TypedPropertyDescriptor<Function>
    ) {
      const method = descriptor.value;
      descriptor.value = function() {
        console.log.apply(
          console,
          ['Invoking', propertyName, 'with arguments:'].concat(
            Array.prototype.slice.call(arguments)
          )
        );
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
    expect(p.reply('John')).toBe(__);
  });
  it('has decorator factories', function() {
    function slow(durationInMillis: number) {
      return function(
        target: any,
        propertyName: string,
        descriptor: TypedPropertyDescriptor<Function>
      ) {
        const method = descriptor.value;
        descriptor.value = function() {
          const tsStart = Date.now();
          const result = method.apply(this, arguments);
          const duration = Date.now() - tsStart;
          if (duration > durationInMillis) {
            console.log(
              'Slow method invocation:',
              propertyName,
              'duration:',
              duration
            );
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
