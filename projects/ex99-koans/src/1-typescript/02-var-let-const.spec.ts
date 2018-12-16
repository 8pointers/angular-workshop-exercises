describe('TypeScript - var, let, const', function() {
  const __: any = 'replace me so that the test is passing';
  it('shadowing vs block scope', function() {
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
  });
  it('var', function(done) {
    var result = '';
    for (var i = 0; i < 3; i++) {
      setTimeout(function() {
        result += i;
        if (result.length === 3) {
          expect(result).toBe(__);
          done();
        }
      }, i * 100);
    }
  });
  it('let 1', function(done) {
    let result = '';
    for (let i = 0; i < 3; i++) {
      setTimeout(function() {
        result += i;
        if (result.length === 3) {
          expect(result).toBe(__);
          done();
        }
      }, i);
    }
  });
  it('let 2', function(done) {
    let result = '';
    let i: number;
    for (i = 0; i < 3; i++) {
      setTimeout(function() {
        result += i;
        if (result.length === 3) {
          expect(result).toBe(__);
          done();
        }
      }, i);
    }
  });
  it('const 1', function() {
    const a = 1;
    expect(a).toBe(__);
    // a = 2;
    // expect(a).toBe(__);
  });
  it('const 2', function() {
    const a = {
      firstName: 'Hello',
      lastName: 'World'
    };
    expect(a).toEqual(__);
    a.firstName = 'Hi';
    expect(a).toEqual(__);
  });
});
