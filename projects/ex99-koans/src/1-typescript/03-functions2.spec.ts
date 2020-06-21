import { person2 } from './03-functions2';

describe('Typescript :: functions :: ', function () {
  const __: any = 'replace me so that the test is passing';
  it('should understand invocation patterns - graduation', function () {
    try {
      person2.setName('Mr Myamoto Musashi');
    } catch (e) {
      expect(e).toEqual(__);
    }
    expect(person2.firstName).toBe(__);
    expect(person2.lastName).toBe(__);
  });
});
