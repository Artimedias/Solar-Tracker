import user from '../js/age.js';

describe('checkType', () => {


  test('Should be able to use checktype to return the users age and sex', () => {
    const Jermey = new user(42, "male");

    expect(Jermey.checkType().toEqual([42, "male"]));
  });
});