import { flow } from '@/index';

describe('flow', () => {
  it('number', () => {
    const f = (n: number) => n + 1;
    const g = (n: number) => n * 2;
    expect(3).toEqual(flow(f)(2));
    expect(6).toEqual(flow(f, g)(2));
    expect(7).toEqual(flow(f, g, f)(2));
    expect(14).toEqual(flow(f, g, f, g)(2));
  });
  it('string', () => {
    const f = (n: string) => n + 'f';
    const g = (n: string) => n + 'g';
    expect('f').toEqual(flow(f)(''));
    expect('fg').toEqual(flow(f, g)(''));
    expect('fgf').toEqual(flow(f, g, f)(''));
    expect('fgfg').toEqual(flow(f, g, f, g)(''));
  });
  it('complex', () => {
    const f = (s: string, n: number) => `${s}+${n.toString().padStart(2, '0')}`;
    const g = (n: string) => n + 'g';
    expect('f+03g').toEqual(flow(f, g)('f', 3));
  });
});
