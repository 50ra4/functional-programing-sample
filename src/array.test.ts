import { of } from '@/index';

describe('of', () => {
  it('single', () => {
    expect([1]).toEqual(of(1));
    expect(['1']).toEqual(of('1'));
    expect([{ a: 'a', b: 1 }]).toEqual(of({ a: 'a', b: 1 }));
  });
  it('nest', () => {
    expect([[1]]).toEqual(of([1]));
  });
});
