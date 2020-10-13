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
  if (typeof catcher === 'undefined') {
    return (_catcher: (...args: A) => T) => __tryCatch(tryer, _catcher);
  }
  return __tryCatch(tryer, catcher);
}

// export const tryCatch = <A extends ReadonlyArray<unknown>, B, C>(
//   fn: (...a: A) => boolean,
//   onTrue: (...a: A) => B,
//   onFalse: (...a: A) => C,
// ): IfElseReturnType<A, B, C> => {
//   return (...args: A) => {
//     if (fn(...args)) {
//       return onTrue(...args);
//     } else {
//       return onFalse(...args);
//     }
//   };
// };
