import { allPass, anyPass } from '.';

const mod = (n: number) => n % 2 === 0;
const odd = (n: number) => n % 2 === 1;
const multiple3 = (n: number) => n % 3 === 0;
const multiple6 = (n: number) => n % 6 === 0;

describe('allPass', () => {
  const TEST_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  it('return true if all conditions are met', () => {
    TEST_DATA.filter(multiple6).forEach((n) => {
      expect(allPass([mod, multiple3])(n)).toBeTruthy();
    });
  });
  it('returns false if all conditions are not met', () => {
    TEST_DATA.filter(multiple6).forEach((n) => {
      expect(allPass([mod, multiple3, odd])(n)).toBeFalsy();
    });
  });
});

describe('anyPass', () => {
  const TEST_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  it('return true if any of conditions are met', () => {
    TEST_DATA.filter((n) => mod(n) || multiple3(n)).forEach((n) => {
      expect(anyPass([mod, multiple3])(n)).toBeTruthy();
    });
  });
  it('returns false if any of conditions are not met', () => {
    TEST_DATA.filter((n) => !(mod(n) || multiple3(n))).forEach((n) => {
      expect(allPass([mod, multiple3])(n)).toBeFalsy();
    });
  });
});
