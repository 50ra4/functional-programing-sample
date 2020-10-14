import { isNil } from '.';

const __getOrElse = <A, B>(onNil: () => A, value: B): A | B => {
  if (isNil(value)) {
    return onNil();
  }
  return value;
};

export function getOrElse<A, B>(onNil: () => A, value: B): A | B;
export function getOrElse<A>(onNil: () => A): <B>(value: B) => A | B;
export function getOrElse<A, B>(onNil: () => A, value?: B) {
  if (typeof value === 'undefined') {
    return (_value: B) => __getOrElse(onNil, _value);
  }
  return __getOrElse(onNil, value);
}
