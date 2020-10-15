import { of } from '.';

describe('of', () => {
  it('Return the argument as an array', () => {
    expect([1]).toEqual(of(1));
    expect(['1']).toEqual(of('1'));
    expect([{ a: 'a', b: 1 }]).toEqual(of({ a: 'a', b: 1 }));
    expect([[1]]).toEqual(of([1]));
  });
});
