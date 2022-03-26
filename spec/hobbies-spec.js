const hobbies = require('../hobbies');
describe('API unit test suite', () => {
  describe('GetHobbies', () => {
    const list = hobbies.getHobbies();

    it('returns 5 hobbies', () => {
      expect(list.length).toEqual(5);
    });
    it('returns "Jogging" as first hobby', () => {
      expect(list[0]).toBe('jogging');
    })
  })
})