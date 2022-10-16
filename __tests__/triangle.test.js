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
  beforeEach(() => {
    James = new user(60, "male");
    Jessica = new user(120, "female");
  });
  test('Should respond with the remaining life left for a 60 y/o male', () => {
    expect(James.lifeLeft(James.user)[0]).toEqual("66.97");
    expect(James.lifeLeft(James.user)[1]).toEqual("26.08");
    expect(James.lifeLeft(James.user)[2]).toEqual("16.01");
    expect(James.lifeLeft(James.user)[3]).toEqual("08.53");
    expect(James.lifeLeft(James.user)[4]).toEqual("01.35");
    expect(James.lifeLeft(James.user)[5]).toEqual("00.54");
    expect(James.lifeLeft(James.user)[6]).toEqual("00.19");
    expect(James.lifeLeft(James.user)[7]).toEqual("00.09");
  });
  test('Should respond how much over the average lifespan a 120 y/o female is', () => {
    expect(Jessica.lifeLeft(Jessica.user)[0]).toEqual("161.83");
    expect(Jessica.lifeLeft(Jessica.user)[1]).toEqual("63.02");
    expect(Jessica.lifeLeft(Jessica.user)[2]).toEqual("38.90");
    expect(Jessica.lifeLeft(Jessica.user)[3]).toEqual("20.62");
    expect(Jessica.lifeLeft(Jessica.user)[4]).toEqual("3.26");
    expect(Jessica.lifeLeft(Jessica.user)[5]).toEqual("1.32");
    expect(Jessica.lifeLeft(Jessica.user)[6]).toEqual("0.47");
    expect(Jessica.lifeLeft(Jessica.user)[7]).toEqual("0.23");
  });
});

