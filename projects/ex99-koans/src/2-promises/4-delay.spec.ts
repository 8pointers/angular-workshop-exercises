describe('delay', function() {
  const __: any = 'replace me so that the test is passing';
  const delay = function(timeInMillis: number): Promise<any> {
    return new Promise((resolve, reject) => {
      //TODO: Implement this function so that the tests are passing
    });
  };
  it('should implement promise-based delay so that the test is passing', function(done) {
    let invoked = false;

    delay(1000).then(() => (invoked = true));

    setTimeout(() => expect(invoked).toBe(false), 800);
    setTimeout(() => {
      expect(invoked).toBe(true);
      done();
    }, 1200);
  });
});
