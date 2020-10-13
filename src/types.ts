import { anyPass } from 'ramda';
import { equals } from '.';
import { flow } from './functions';

export type SafePred<A> = (...a: readonly A[]) => boolean;

export const of = <T>(x: T): T[] => [x];

export const ValueType = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  symbol: 'symbol',
  bigint: 'bigint',
  function: 'function',
  date: 'date',
  object: 'object',
  array: 'array',
  null: 'null',
  undefined: 'undefined',
  unknown: 'unknown',
} as const;
type ValueType = typeof ValueType[keyof typeof ValueType];

const __getObjectType = (value: object | null): ValueType => {
  if (value === null) {
    return ValueType.null;
  }
  if (Array.isArray(value)) {
    return ValueType.array;
  }
  if (value instanceof Date) {
    return ValueType.date;
  }
  return ValueType.object;
};

export const getValueType = (value: unknown): ValueType => {
  switch (typeof value) {
    case 'string':
      return ValueType.string;
    case 'number':
      return ValueType.number;
    case 'boolean':
      return ValueType.boolean;
    case 'function':
      return ValueType.function;
    case 'undefined':
      return ValueType.undefined;
    case 'symbol':
      return ValueType.symbol;
    case 'bigint':
      return ValueType.bigint;
    case 'object':
      return __getObjectType(value);
    default:
      return ValueType.unknown;
  }
};

const NullValueType: Readonly<ValueType>[] = [ValueType.undefined, ValueType.null];
const isNillValueType = (v: ValueType) => NullValueType.includes(v);
export const isNil = (x: unknown): x is undefined | null => flow(getValueType, isNillValueType)(x);

const isEmptyString = (x: unknown): x is '' => getValueType(x) === ValueType.string && equals(x, '');
const isEmptyObject = (x: unknown): x is {} => getValueType(x) === ValueType.object && equals(x, {});
const isEmptyArray = <T>(x: unknown): x is T[] => getValueType(x) === ValueType.array && equals(x, []);

export const isEmpty = <T = unknown>(value: T): boolean => {
  return anyPass([isNil, isEmptyString, isEmptyObject, isEmptyArray])(value);
};
