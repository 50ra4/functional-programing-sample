const __tryCatch = <T, A extends ReadonlyArray<unknown>>(
  tryer: (...args: A) => T,
  catcher: (...args: A) => T,
): ((...args: A) => T) => {
  return (...args: A) => {
    try {
      return tryer(...args);
    } catch (e) {
      return catcher(...args);
    }
  };
};

export function tryCatch<T, A extends ReadonlyArray<unknown>>(
  tryer: (...args: A) => T,
  catcher: (...args: A) => T,
): (...args: A) => T;
export function tryCatch<T, A extends ReadonlyArray<unknown>>(
  tryer: (...args: A) => T,
): (catcher: (...args: A) => T) => (...args: A) => T;
export function tryCatch<T, A extends ReadonlyArray<unknown>>(tryer: (...args: A) => T, catcher?: (...args: A) => T) {
  if (arguments.length === 1) {
    return (_catcher: (...args: A) => T) => __tryCatch(tryer, _catcher);
  }
  return __tryCatch(tryer, catcher!);
}
