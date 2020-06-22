// tslint:disable:object-literal-shorthand only-arrow-functions
export const person2: any = {
  setName: function (name: string) {
    const names = name.split(' ');
    const setFirstAndLastName = function (firstName, lastName) {
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
