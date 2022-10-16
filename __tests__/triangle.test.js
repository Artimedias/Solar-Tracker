import user from '../js/age.js';

describe('checkType', () => {
let Jermey;
  beforeEach(() => {
    Jermey = new user(42, "male");
  });
  test('Should be able to use checktype to return the users age and sex', () => {
    expect(Jermey.checktype(Jermey.user)[0]).toEqual(42);
    expect(Jermey.checktype(Jermey.user)[1]).toEqual("male");
  });
});

describe('ageConvert', () => {
  let Jane;
  beforeEach(() => {
    Jane = new user(20, "female");
  });
  test('Should be able to respond with the age on all the different planets', () => {
    expect(Jane.ageConvert(Jane.user)[0]).toEqual("83.20");
    expect(Jane.ageConvert(Jane.user)[1]).toEqual("32.40");
    expect(Jane.ageConvert(Jane.user)[2]).toEqual("20.00");
    expect(Jane.ageConvert(Jane.user)[3]).toEqual("10.60");
    expect(Jane.ageConvert(Jane.user)[4]).toEqual("1.68");
    expect(Jane.ageConvert(Jane.user)[5]).toEqual("0.68");
    expect(Jane.ageConvert(Jane.user)[6]).toEqual("0.24");
    expect(Jane.ageConvert(Jane.user)[7]).toEqual("0.12");
  });
});

