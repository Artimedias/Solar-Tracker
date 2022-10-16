export default class user {
    constructor(age, sex) {
      this.age = age;
      this.sex = sex;
    }

checktype() {
    let returnArray = [this.age, this.sex];
    return returnArray;
}

ageConvert() {
  let planets = [4.16, 1.62, 1, .53, .084, .034, .012, .006]
  let newAge = [];

  for(let i = 0; i < 8; i++)
  {
    newAge.push((planets[i] * this.age).toFixed(2))
  }

  return newAge;
}
}

//Mercury = 4.16, Venus = 1.62, Mars = .53, Jupiter = .084, Saturn = .034, Uranus = .012, Neptune = .006