import { SafePred } from '@/types';

export function all<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function all<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
export function all<T>(fn: (a: T) => boolean, list?: readonly T[]) {
  if (typeof list === 'undefined') {
    return (_list: readonly T[]) => _list.every(fn);
  }
  return list.every(fn);
}

export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function any<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
export function any<T>(fn: (a: T) => boolean, list?: readonly T[]) {
  if (typeof list === 'undefined') {
    return (_list: readonly T[]) => _list.some(fn);
  }
  return list.some(fn);
}

export const allPass = <T>(fns: SafePred<T>[]) => (value: T): boolean => fns.every((fn) => fn(value));
export const anyPass = <T>(fns: SafePred<T>[]) => (value: T): boolean => fns.some((fn) => fn(value));
