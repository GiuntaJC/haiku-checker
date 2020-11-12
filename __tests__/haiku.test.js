import Haiku from './../src/haiku.js';
// import syllable?

describe('Haiku', () => {
  let reusableHaiku;

  beforeEach(() => {
    reusableHaiku = new Haiku("An ocean voyage.", "As waves break over the bow, ", "the sea welcomes me.");
  });

  test('should correctly create a haiku object', () => {
    expect(reusableHaiku.line1).toBe("An ocean voyage.");
    expect(reusableHaiku.line2).toBe("As waves break over the bow, ");
    expect(reusableHaiku.line3).toBe("the sea welcomes me.");
  });
  test('should correctly count the number of vowels in line1', () => {
    expect(reusableHaiku.vowelCount()).toEqual(7);
  });

  test('should correctly return syllable count in line1', () => {
    expect(reusableHaiku.findSyllable()).toEqual(5);
  });
});