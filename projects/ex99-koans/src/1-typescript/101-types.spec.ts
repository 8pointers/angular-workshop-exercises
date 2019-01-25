describe('TypeScript - it has types!', function() {
  const __: any = 'replace me so that the test is passing';
  it('boolean', function() {
    let isBoolean = true;
    expect(isBoolean).toBe(__);
    // isBoolean = 23;
  });
  it('number', function() {
    let myNumber = 10 + 0x10 + 0b10 + 0o10;
    expect(myNumber).toBe(__);
  });
  it('string', function() {
    let age = 16;
    let name = 'Typescript';
    let greeting = `Hello ${name}
    are you ${age + 2}?`;
    // greeting = `Hello ${ lastName }`;
    let anotherGreeting = 'Hello $ { name }';
    expect(greeting).toBe(__);
    expect(anotherGreeting).toBe(__);
  });
  it('any', function() {
    let somethingNumber = 10;
    // somethingNumber += ' years';
    expect(somethingNumber).toBe(__);

    let something: any = 10;
    something += ' years';
    expect(something).toBe(__);
  });
  it('array', function() {
    let myArrayTypeInferred = [1, 2, 3];
    // myArrayTypeInferred[3] = 'a string';
    expect(myArrayTypeInferred).toEqual(__);

    let myArrayTypeAny: any[] = [1, 2, 3];
    myArrayTypeAny[3] = 'a string';
    expect(myArrayTypeAny).toEqual(__);
  });
  it('touple', function() {
    let point: [number, number, number, string] = [1.123, 2.345, 3.456, 'blue'];
    expect(point).toEqual(__);
    expect(point[0].toPrecision(3)).toBe(__);
    // expect(point[3].toPrecision(3)).toBe(__);

    // point[4] = 4.567;
    // expect(point).toEqual(__);

    // point[3] = 4.567;
    // expect(point).toEqual(__);
  });
});
