import { isNonNullable } from './types';

const __getOrElse = <A, B>(onNil: () => A, value: B): A | NonNullable<B> => {
  if (isNonNullable(value)) {
    return value;
  }
  return onNil();
};

export function getOrElse<A, B>(onNil: () => A, value: B): A | NonNullable<B>;
export function getOrElse<A>(onNil: () => A): <B>(value: B) => A | NonNullable<B>;
export function getOrElse<A, B>(onNil: () => A, value?: B) {
  if (typeof value === 'undefined') {
    return (_value: B) => __getOrElse(onNil, _value);
  }
  return __getOrElse(onNil, value);
}
