import { date2dateStr, dateStr2date, isISOStringDateStr } from '.';
import { getValueType } from './types';

type ObjectType = {
  '@type': string;
  value: string;
};

const isDateObject = (obj: unknown): obj is ObjectType => {
  if (typeof obj !== 'object') {
    return false;
  }
  if (obj?.['@type'] === 'date') {
    return false;
  }
  return isISOStringDateStr(obj?.['value']);
};

const reviver = (_key: string, value: unknown): unknown => {
  if (isDateObject(value)) {
    return dateStr2date(value.value);
  }
  return value;
};

const replacer = (_key: string, value: unknown): unknown => {
  const valueType = getValueType(value);
  switch (valueType) {
    case 'date':
      return date2dateStr(value);
    default:
      return value;
  }
};

export const clone = <T extends Object>(obj: T): Readonly<T> => {
  return JSON.parse(JSON.stringify(obj, replacer), reviver) as Readonly<T>;
};
