import { clone } from '.';

const __mergeDeepRight = <O1 extends object, O2 extends Partial<O1>>(o1: O1, o2: O2): Readonly<O1> => {
  const obj1 = clone(o1);
  const obj2 = clone(o2);
  return { ...obj1, ...obj2 };
};

export function mergeDeepRight<O1 extends object, O2 extends Partial<O1>>(o1: O1, o2: O2): Readonly<O1>;
export function mergeDeepRight<O1 extends object>(a: O1): <O2 extends Partial<O1>>(o2: O2) => Readonly<O1>;
export function mergeDeepRight<O1 extends object, O2 extends Partial<O1>>(o1: O1, o2?: O2) {
  if (typeof o2 === 'undefined') {
    return (_o2: O2) => __mergeDeepRight(o1, _o2 || {});
  }
  return __mergeDeepRight(o1, o2 || {});
}
