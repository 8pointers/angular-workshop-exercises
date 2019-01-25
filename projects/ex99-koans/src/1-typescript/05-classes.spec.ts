describe('TypeScript :: classes :: ', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand classes', function() {
    class Person {
      private static counter = 0;
      public readonly id: number;
      get name() {
        return `Mr. ${this.firstName} ${this.lastName}`;
      }
      set name(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
      }
      sayHello1() {
        return `Hello from ${this.name}`;
      }
      sayHello2 = () => `Hello from ${this.name}`;
      constructor(private firstName: string, private lastName: string) {
        this.id = ++Person.counter;
      }
    }
    const person = new Person('Myamoto', 'Musashi');
    expect(person.name).toBe(__);

    person.name = 'Hattori Hanzo';
    expect(person.name).toBe(__);

    expect(person.sayHello1()).toBe(__);
    expect(person.sayHello2()).toBe(__);
    const sayHello1 = person.sayHello1;
    try {
      expect(sayHello1()).toBe(__);
    } catch (e) {
      expect(e).toEqual(__);
    }
    const sayHello2 = person.sayHello2;
    expect(sayHello2()).toBe(__);
  });
});
