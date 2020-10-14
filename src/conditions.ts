import { length } from '.';

type SafePred<A extends ReadonlyArray<unknown>> = (...a: A) => boolean;

export function all<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function all<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
export function all<T>(fn: (a: T) => boolean, list?: readonly T[]) {
  if (arguments.length === 1) {
    return (_list: readonly T[]) => _list.every(fn);
  }
  return list!.every(fn);
}

export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function any<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
export function any<T>(fn: (a: T) => boolean, list?: readonly T[]) {
  if (arguments.length === 1) {
    return (_list: readonly T[]) => _list.some(fn);
  }
  return list!.some(fn);
}

export const allPass = <T extends ReadonlyArray<unknown>>(fns: SafePred<T>[]) => (...value: T): boolean =>
  fns.every((fn) => fn(...value));
export const anyPass = <T extends ReadonlyArray<unknown>>(fns: SafePred<T>[]) => (...value: T): boolean =>
  fns.some((fn) => fn(...value));

type CondFns<A extends ReadonlyArray<unknown>, B> = [SafePred<A>, (...a: A) => B];
export const cond = <A extends ReadonlyArray<unknown>, B>(fns: CondFns<A, B>[]) => (...params: A): B | undefined => {
  const matched = fns.find(([pred]) => pred(...params));
  if (!matched) {
    return undefined;
  }
  const [, transform] = matched;
  return transform(...params);
};

export const condAll = <A extends ReadonlyArray<unknown>, B>(fns: CondFns<A, B>[]) => (...params: A): B[] => {
  return fns.filter(([pred]) => pred(...params)).map(([, transform]) => transform(...params));
};

export const match = <A extends ReadonlyArray<unknown>, B>(
  onDefault: (...params: A) => B, //
  fns: CondFns<A, B>[],
) => (...params: A): B => cond(fns)(...params) || onDefault(...params);

export const not = <A extends ReadonlyArray<unknown>>(pred: SafePred<A>) => (...params: A): boolean => !pred(...params);

const numberOrStringLength = (a: number | string): number => (typeof a === 'string' ? length(a) : a);

export function lt<T extends number | string>(a: number, b: T): boolean;
export function lt<T extends number | string>(a: number): (b: T) => boolean;
export function lt<T extends number | string>(a: number, b?: T) {
  if (arguments.length === 1) {
    return (_b: T) => a < numberOrStringLength(_b);
  }
  return a < numberOrStringLength(b!);
}

export function lte<T extends number | string>(a: number, b: T): boolean;
export function lte<T extends number | string>(a: number): (b: T) => boolean;
export function lte<T extends number | string>(a: number, b?: T) {
  if (arguments.length === 1) {
    return (_b: T) => a <= numberOrStringLength(_b);
  }
  return a <= numberOrStringLength(b!);
}

export function gt<T extends number | string>(a: number, b: T): boolean;
export function gt<T extends number | string>(a: number): (b: T) => boolean;
export function gt<T extends number | string>(a: number, b?: T) {
  if (arguments.length === 1) {
    return (_b: T) => a > numberOrStringLength(_b);
  }
  return a > numberOrStringLength(b!);
}

export function gte<T extends number | string>(a: number, b: T): boolean;
export function gte<T extends number | string>(a: number): (b: T) => boolean;
export function gte<T extends number | string>(a: number, b?: T) {
  if (arguments.length === 1) {
    return (_b: T) => a >= numberOrStringLength(_b);
  }
  return a >= numberOrStringLength(b!);
}
