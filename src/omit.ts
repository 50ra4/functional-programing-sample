const __omit = <T, K extends string | number | symbol>(names: readonly K[], obj: T): Omit<T, K> => {
  return Object.entries(obj)
    .filter(([name]) => !names.includes(name as K))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as Omit<T, K>);
};

export function omit<T, K extends keyof T>(names: readonly K[], obj: T): Omit<T, K>;
export function omit<K extends string>(names: readonly K[]): <T>(obj: T) => Omit<T, K>;
export function omit<T, K extends string | number | symbol>(names: readonly K[], obj?: T) {
  if (typeof obj === 'undefined') {
    return (_obj: T) => __omit(names, _obj);
  }
  return __omit(names, obj);
}
