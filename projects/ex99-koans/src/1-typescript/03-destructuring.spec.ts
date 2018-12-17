describe('TypeScript - destructuring', function() {
  const __: any = 'replace me so that the test is passing';
  it('works with arrays', function() {
    const myArray = ['first', 'second'];
    let [first, second] = myArray;
    expect(first).toBe(__);
    expect(second).toBe(__);

    [first, second] = [second, first];
    expect(first).toBe(__);
    expect(second).toBe(__);

    const [head, ...rest] = myArray;
    expect(head).toBe(__);
    expect(rest).toEqual(__);
  });
  it('works with function parameters', function() {
    function dist([x, y]: [number, number]) {
      return Math.sqrt(x * x + y * y);
    }
    expect(dist([3, 4])).toBe(__);
  });
  it('works with objects', function() {
    const person = {
      firstName: 'Hello',
      lastName: 'World'
    };
    const { firstName, lastName } = person;
    expect(firstName).toBe(__);
    expect(lastName).toBe(__);

    const { firstName: first, lastName: last } = person;
    expect(first).toBe(__);
    expect(last).toBe(__);

    (function({ name, title = 'N/A' }: any) {
      expect(name).toBe(__);
      expect(title).toBe(__);
    })({ name: 'My Name' });
  });
});
