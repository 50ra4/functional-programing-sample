import { getOrElse, always } from '@/index';

describe('getOrElse', () => {
  it('non nullable value', () => {
    expect('1').toEqual(getOrElse(always('2'), '1'));
    expect(1).toEqual(getOrElse(always(2), 1));
    expect({ a: '1', b: 1 }).toEqual(getOrElse(always({ a: '2', b: 2 }), { a: '1', b: 1 }));
  });
  it('nullable value', () => {
    expect('2').toEqual(getOrElse(always('2'), null));
    expect(1).toEqual(getOrElse(always(1), undefined));
  });
  it('curry', () => {
    const orString = getOrElse(always('string'));
    expect('number').toEqual(orString('number'));
    expect('string').toEqual(orString(undefined));
    expect('string').toEqual(orString(null));
  });
});
