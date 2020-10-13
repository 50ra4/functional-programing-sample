import { getValueType } from '.';
import { isDate } from './date';

const __dateEq = <T>(a: T, b: T): boolean => {
  if (!isDate(a) || !isDate(b)) {
    return false;
  }
  return __equals(a.toISOString(), b.toISOString());
};

const __objectEq = <T = unknown>(a: T, b: T): boolean => {
  const aKeyValue = Object.entries(a);
  const bKeyValue = Object.entries(b);
  return aKeyValue.every(([aKey, aValue]) => {
    const matchedKeyValue = bKeyValue.find(([bKey]) => aKey === bKey);
    if (!matchedKeyValue) {
      return false;
    }
    const [, bValue] = matchedKeyValue;
    return __equals(aValue, bValue);
  });
};

const __arrayEq = <T = unknown>(a: T, b: T): boolean => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }
  return a.every((elm, i) => __equals(elm, b[i]));
};

const __equals = <T>(a: T, b: T): boolean => {
  const aType = getValueType(a);
  const bType = getValueType(b);
  if (aType !== bType) {
    return false;
  }
  switch (aType) {
    case 'object':
      return __objectEq(a, b);
    case 'array':
      return __arrayEq(a, b);
    case 'date':
      return __dateEq(a, b);
    case 'function':
      // FIXME: doesn't work
      return false;
    default:
      // case 'string':
      // case 'number':
      // case 'boolean':
      // case 'symbol':
      // case 'bigint':
      // case 'undefined':
      // case 'null':
      // case 'unknown':
      return a === b;
  }
};

export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;
export function equals<T>(a: T, b?: T) {
  if (typeof b === 'undefined') {
    return (_b: T) => __equals(a, _b);
  }
  return __equals(a, b);
}
