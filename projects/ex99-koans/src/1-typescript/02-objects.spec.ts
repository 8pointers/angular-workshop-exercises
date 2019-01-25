describe('TypeScript :: objects :: ', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand object literals', function() {
    const firstName = 'Myamoto';
    const lastName = 'Musashi';
    const age = 23;
    const prefix = 'stat';
    const person = {
      id: 1,
      name: `Mr. ${firstName} ${lastName}`,
      age,
      [prefix + 'us']: 'active'
    };
    expect(person).toEqual(__);
  });
  it('should understand retrieving property values', function() {
    const person: any = {
      firstName: 'Myamoto',
      lastName: 'Musashi',
      age: 23
    };
    const propertyName = 'firstName';
    const name = 'Name';
    expect(person.firstName).toBe(__);
    expect(person['firstName']).toBe(__);
    expect(person[propertyName]).toBe(__);
    expect(person['first' + name]).toBe(__);
    expect(person.propertyName).toBe(__);
  });
  it('should understand destructuring', function() {
    const samurai = {
      id: 1,
      name: 'Myamoto Musashi',
      age: 32,
      weapons: ['Katana']
    };
    const { name, age } = samurai;
    expect(name).toBe(__);
    expect(age).toBe(__);
  });
  it('should understand destructuring and rest operator', function() {
    const samurai = {
      id: 1,
      name: 'Myamoto Musashi',
      age: 32,
      weapons: ['Katana']
    };
    const { weapons, ...person } = samurai;
    expect(weapons).toEqual(__);
    expect(person).toEqual(__);
    const { ...anotherSamurai } = samurai;
    expect(anotherSamurai).toEqual(__);
    expect(samurai.weapons === anotherSamurai.weapons).toBe(__);
    anotherSamurai.name = 'Mr. ' + anotherSamurai.name;
    anotherSamurai.weapons.push('Tanto');
    expect(samurai).toEqual(__);
  });
  it('should understand spread operator', function() {
    const person = {
      id: 1,
      name: 'Myamoto Musashi',
      age: 32
    };
    const samurai1 = { ...person, weapons: ['Katana'] };
    expect(samurai1).toEqual(__);
    const samurai2 = { ...person, weapons: ['Katana'], name: 'Hattori Hanzo' };
    expect(samurai2).toEqual(__);
    const samurai3 = { weapons: ['Katana'], age: 43, ...person };
    expect(samurai3).toEqual(__);
  });
});
