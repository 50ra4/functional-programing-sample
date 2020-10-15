import { ifElse } from '.';

const mod = (n: number) => n % 2 === 0;
const odd = (n: number) => n % 2 === 1;

const inc = (n: number) => n + 1;
const dec = (n: number) => n - 1;

describe('ifElse', () => {
  const TEST_VALUE = [1, 2, 3, 4, 5, 6];
  const testFn = ifElse(mod, inc, dec);
  it('When the condition is met, the value of onTrue is returned.', () => {
    TEST_VALUE.filter(mod).map((n) => {
      expect(inc(n)).toBe(testFn(n));
    });
  });
  it('When the condition is not met, the value of onFalse is returned.', () => {
    TEST_VALUE.filter(odd).map((n) => {
      expect(dec(n)).toBe(testFn(n));
    });
  });
});
