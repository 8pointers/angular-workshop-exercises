describe('Typescript - functions', function() {
  const __: any = 'replace me so that the test is passing';
  it('should understand lambdas', function() {
    let person1 = {
      firstName: '',
      lastName: '',
      setName: function(name: string) {
        let names = name.split(' ');
        let setFirstAndLastName = function(
          firstName: string,
          lastName: string
        ) {
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

    let person2 = {
      firstName: '',
      lastName: '',
      setName: function(name: string) {
        let names = name.split(' ');
        let setFirstAndLastName = (firstName: string, lastName: string) => {
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
    person2.setName('Mr Myamoto Musashi');
    expect(person2.firstName).toBe(__);
    expect(person2.lastName).toBe(__);
  });
  it('should understand overloading', function() {
    function inc(x: number): number;
    function inc(a: number[]): number[];
    function inc(v: any): any {
      if (typeof v === 'number') {
        return v + 1;
      }
      return v.map(inc);
    }
    expect(inc(100)).toBe(__);
    expect(inc([100, 200, 300])).toEqual(__);
    // expect(inc({age: 10})).toEqual(__);
  });
  it('functional extensions arrays', function() {
    let d = 2,
      result: number[];
    result = Array.from({ length: Math.pow(6, d) }, (n, i) => i)
      .map(n => parseInt(n.toString(6), 10))
      .map(function(n: number) {
        let sum = d;
        while (n) {
          sum += n % 10;
          n = Math.floor(n / 10);
        }
        return sum;
      })
      .reduce(function(r: number[], n: number) {
        r[n] = (r[n] || 0) + 1;
        return r;
      }, []);
    expect(result).toEqual(__);
    // var width = document.documentElement.clientWidth, height = document.documentElement.clientHeight * 0.8;
    // result.forEach(function (n, i, all) {
    //   var max = Math.max.apply(Math, all.slice(d));
    //   document.body.innerHTML += '<div style="\
    //     position: absolute;\
    //     top: 0px;\
    //     left: ' + (i * width / all.length) + 'px;\
    //     width: ' + (width / all.length) + 'px;\
    //     height: ' + (n * height / max) + 'px;\
    //     background-color: #4444AA">\
    //   </div>';
    // });
  });
});
