// tslint:disable:only-arrow-functions no-shadowed-variable no-var-keyword prefer-const
describe('TypeScript :: var, let, const :: ', function () {
  const __: any = 'replace me so that the test is passing';
  it('should understand functional vs block scope', function () {
    var a = 1;
    if (true) {
      var a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);

    let b = 1;
    if (true) {
      let b = 2;
      expect(b).toBe(__);
    }
    expect(b).toBe(__);

    let c = 1;
    if (true) {
      let c = 2;
      expect(c).toBe(__);
    }
    expect(c).toBe(__);
  });
  it('should understand loops and var', function (done) {
    var result = '';
    for (var i = 0; i < 3; i++) {
      setTimeout(function () {
        result += i;
        if (result.length === 3) {
          expect(result).toBe(__);
          done();
        }
      }, i * 100);
    }
  });
  it('should understand loops and let', function (done) {
    let result = '';
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        result += i;
        if (result.length === 3) {
          expect(result).toBe(__);
          done();
        }
      }, i);
    }
  });
  it('should understand loops and let', function (done) {
    let result = '';
    let i: number;
    for (i = 0; i < 3; i++) {
      setTimeout(function () {
        result += i;
        if (result.length === 3) {
          expect(result).toBe(__);
          done();
        }
      }, i);
    }
  });
  it('should understand const', function () {
    const a = 1;
    expect(a).toBe(__);
    try {
      // uncomment the code below and check what happens!
      // a = 2;
      expect(a).toBe(__);
    } catch (e) {
      expect(e).toEqual(__);
    }
  });
  it('should understand const vs immutability', function () {
    const person = {
      firstName: 'Hello',
      lastName: 'World'
    };
    expect(person).toEqual(__);
    person.firstName = 'Hi';
    expect(person).toEqual(__);
  });
});
