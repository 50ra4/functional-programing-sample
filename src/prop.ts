const __prop = <P extends string, T>(p: P, obj: T | Record<P, T>): P extends keyof T ? [P] : T => {
  return Object.entries(obj).find(([key]) => key === p)?.[1];
};

export function prop<P extends keyof T, T>(p: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;
export function prop<P extends string, T>(p: P, obj?: Record<P, T> | T) {
  if (typeof obj === 'undefined') {
    return <T>(_obj: Record<P, T>) => __prop(p, _obj);
  }
  return __prop(p, obj);
}
