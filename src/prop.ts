import { clone } from '.';

type PropReturnValue<P extends string, T extends object> = P extends keyof T ? T[P] : T;
const __prop = <P extends string, T extends object>(p: P, obj: T | Record<P, T>): PropReturnValue<P, T> => {
  return Object.entries(clone(obj)).find(([key]) => key === p)?.[1] as PropReturnValue<P, T>;
};

export function prop<P extends keyof T, T extends object>(p: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T extends object>(obj: Record<P, T>) => T;
export function prop<P extends string, T extends object>(p: P): (obj: Record<P, T>) => T;
export function prop<P extends string, T extends object>(p: P, obj?: Record<P, T> | T) {
  if (arguments.length === 1) {
    return <T>(_obj: Record<P, T>) => __prop(p, _obj);
  }
  return __prop(p, obj!);
}
