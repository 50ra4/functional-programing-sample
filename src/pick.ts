type PickReturnType<T, K extends string | number | symbol> = Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;

const __pick = <T, K extends string | number | symbol>(names: readonly K[], obj: T): PickReturnType<T, K> => {
  return Object.entries(obj)
    .filter(([name]) => names.includes(name as K))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as PickReturnType<T, K>);
};

export function pick<T, K extends string | number | symbol>(names: readonly K[], obj: T): PickReturnType<T, K>;
export function pick<K extends string | number | symbol>(names: readonly K[]): <T>(obj: T) => PickReturnType<T, K>;
export function pick<T, K extends string | number | symbol>(names: readonly K[], obj?: T) {
  if (typeof obj === 'undefined') {
    return (_obj: T) => __pick(names, _obj);
  }
  return __pick(names, obj);
}
