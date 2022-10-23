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

describe('left', () => {
  let James;
  let Jessica;
  let Jenny;
  let Jerry;
  let Jdog;
    James = new user(60, "male");
    Jessica = new user(120, "female");
    Jenny = new user(20, "female");
    Jerry = new user(999, "male");
    Jdog = new user(13, "pug")
  test('Should respond with the remaining life left for a 60 y/o male', () => {
    expect(James.lifeLeft(James.user)).toEqual([66.97, 26.08, 16.1, 8.53, 1.35, .54, .19, .09]);
  });
  test('Should respond how much over the average lifespan a 120 y/o female is', () => {
    expect(Jessica.lifeLeft(Jessica.user)).toEqual([161.83, 63.02, 38.90, 20.62, 3.27, 1.33, 0.47, 0.24]);
  });
  test('Should respond with the remaining years to live for a 20 y/o female', () => {
    expect(Jenny.lifeLeft(Jenny.user)).toEqual([254.17, 98.98, 61.1, 32.38, 5.13, 2.07, 0.73, 0.36]);
  });
  test('Should respond respond how much over the average lifespan a 999 y/o male is', () => {
    expect(Jerry.lifeLeft(Jerry.user)).toEqual([3839.27, 1495.1, 922.9, 489.14, 77.53, 31.39, 11.08, 5.54]);
  });

  describe('dog', () => {

    test('Should respond with the users age in dog years.', () => {
      expect(Jdog.dog(Jdog.user)).toEqual(5.93);
    });

  });
});

