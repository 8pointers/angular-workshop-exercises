describe('Typescript :: functions :: ', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand normal and fat-arrow functions', function() {
    const add2 = function(a, b) {
      return a + b;
    };
    const add3 = (a, b) => {
      return a + b;
    };
    const add4 = (a, b) => a + b;
    expect(add1(123, 45)).toEqual(__);
    expect(add2(123, 45)).toEqual(__);
    expect(add3(123, 45)).toEqual(__);
    expect(add4(123, 45)).toEqual(__);
    function add1(a, b) {
      return a + b;
    }
  });
  it('should understand default parameters', function() {
    const add = function(a, b = 1) {
      return a + b;
    };
    expect(add(123, 45)).toBe(__);
    expect(add(123, 0)).toBe(__);
    expect(add(123)).toBe(__);
    expect(add(123, undefined)).toBe(__);
    expect(add(123, null)).toBe(__);
  });
  it('should understand destructuring parameters', function() {
    const getName = ({ firstName, lastName }) => `Mr. ${firstName} ${lastName}`;
    expect(getName({ firstName: 'Myamoto', lastName: 'Musashi' })).toBe(__);
  });
  it('should understand rest parameters', function() {
    const format1 = function(template, ...params) {
      for (let i = 0; i < params.length; i++) {
        template = template.replace('%', params[i]);
      }
      return template;
    };
    expect(format1('Hello!')).toBe(__);
    expect(format1('Hello %!', 'World')).toBe(__);
    expect(format1('Hello % Mr. %!', 'World', 'Myamoto')).toBe(__);

    const format2 = (template, ...params) => params.reduce((acc, param) => acc.replace('%', param), template);
    expect(format2('Hello!')).toBe(__);
    expect(format2('Hello %!', 'World')).toBe(__);
    expect(format2('Hello % Mr. %!', 'World', 'Myamoto')).toBe(__);
  });
  it('should understand invocation patterns for normal functions', function() {
    const sink: any = {};
    const testFunction = function() {
      const person = {
        name: 'First',
        setName: function(name) {
          this.name = name;
        }
      };
      expect(person.name).toBe(__);

      person.setName('Second');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);

      const setName = person.setName;
      setName('Third');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);

      const mystery = new person.setName('Fourth');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);
      expect(mystery.name).toEqual(__);

      setName.call(mystery, 'Fifth');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);
      expect(mystery.name).toBe(__);

      setName.apply(mystery, ['Sixth']);
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);
      expect(mystery.name).toBe(__);
    };
    testFunction.call(sink);
  });
  it('should understand invocation patterns for fat-arrow functions', function() {
    const sink: any = {};
    const testFunction = function() {
      const person = {
        name: 'First',
        setName: name => (this.name = name)
      };
      expect(person.name).toBe(__);

      person.setName('Second');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);

      const setName = person.setName;
      setName('Third');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);

      let mystery;
      try {
        // uncomment the code below and check what happens!
        // mystery = new person.setName('Fourth');
        expect(person.name).toBe(__);
        expect(sink.name).toBe(__);
        expect(window.name).toBe(__);
        expect(mystery.name).toEqual(__);
      } catch (e) {
        expect(e).toEqual(__);
      }

      setName.call(mystery, 'Fifth');
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);
      expect(mystery.name).toBe(__);

      setName.apply(mystery, ['Sixth']);
      expect(person.name).toBe(__);
      expect(sink.name).toBe(__);
      expect(window.name).toBe(__);
      expect(mystery.name).toBe(__);
    };
    testFunction.call(sink);
  });
  it('should understand invocation patterns - strict mode', function() {
    'use strict';
    const person = {
      name: 'First',
      setName: function(name) {
        this.name = name;
      }
    };

    const setName = person.setName;
    try {
      setName('Third');
      expect(person.name).toBe(__);
      expect(window.name).toBe(__);
    } catch (e) {
      expect(e).toEqual(__);
    }
  });
  it('should understand invocation patterns - graduation', function() {
    /*
      Try running this spec with both
        "target": "es6",
      and
        "target": "es5",
      in ex99-koans/tsconfig.spec.json
    */
    const person1: any = {
      setName: function(name: string) {
        const names = name.split(' ');
        const setFirstAndLastName = function(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        };
        if (names.length === 3) {
          setFirstAndLastName(names[1], names[2]);
        } else {
          setFirstAndLastName(names[0], names[1]);
        }
      }
    };
    person1.setName('Mr Myamoto Musashi');
    expect(person1.firstName).toBe(__);
    expect(person1.lastName).toBe(__);
    expect(window['firstName']).toBe(__);
    expect(window['lastName']).toBe(__);

    const person3: any = {
      setName: function(name: string) {
        const self = this;
        const names = name.split(' ');
        const setFirstAndLastName = function(firstName, lastName) {
          self.firstName = firstName;
          self.lastName = lastName;
        };
        if (names.length === 3) {
          setFirstAndLastName(names[1], names[2]);
        } else {
          setFirstAndLastName(names[0], names[1]);
        }
      }
    };
    person3.setName('Mr Myamoto Musashi');
    expect(person3.firstName).toBe(__);
    expect(person3.lastName).toBe(__);

    const person4: any = {
      setName: function(name: string) {
        const names = name.split(' ');
        const setFirstAndLastName = function(firstName, lastName) {
          person3.firstName = firstName;
          person3.lastName = lastName;
        };
        if (names.length === 3) {
          setFirstAndLastName(names[1], names[2]);
        } else {
          setFirstAndLastName(names[0], names[1]);
        }
      }
    };
    person4.setName('Mr Myamoto Musashi');
    expect(person4.firstName).toBe(__);
    expect(person4.lastName).toBe(__);

    const person5: any = {
      setName: function(name: string) {
        const names = name.split(' ');
        const setFirstAndLastName = (firstName, lastName) => {
          this.firstName = firstName;
          this.lastName = lastName;
        };
        if (names.length === 3) {
          setFirstAndLastName(names[1], names[2]);
        } else {
          setFirstAndLastName(names[0], names[1]);
        }
      }
    };
    person5.setName('Mr Myamoto Musashi');
    expect(person5.firstName).toBe(__);
    expect(person5.lastName).toBe(__);
  });
  it('should understand closures', function() {
    const add = function(a) {
      return function(b) {
        return a + b;
      };
    };
    expect(add(123)(45)).toBe(__);
    const inc = add(1);
    expect(inc(123)).toBe(__);

    const pick = propertyName => object => object[propertyName];
    const getName = pick('name');
    const person = {
      name: 'Myamoto',
      age: 23
    };
    expect(getName(person)).toBe(__);
  });
});
