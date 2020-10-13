type IfElseReturnType<A extends ReadonlyArray<unknown>, B, C> = (...args: A) => B | C;

export const ifElse = <A extends ReadonlyArray<unknown>, B, C>(
  fn: (...a: A) => boolean,
  onTrue: (...a: A) => B,
  onFalse: (...a: A) => C,
): IfElseReturnType<A, B, C> => {
  return (...args: A) => {
    if (fn(...args)) {
      return onTrue(...args);
    } else {
      return onFalse(...args);
    }
  };
};
