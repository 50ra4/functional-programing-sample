/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-rest-params */
export function flow<A extends ReadonlyArray<unknown>, B>(ab: (...a: A) => B): (...a: A) => B;
export function flow<A extends ReadonlyArray<unknown>, B, C>(ab: (...a: A) => B, bc: (b: B) => C): (...a: A) => C;
export function flow<A extends ReadonlyArray<unknown>, B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): (...a: A) => D;
export function flow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): (...a: A) => E;
export function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): (...a: A) => F;
export function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): (...a: A) => G;
export function flow(ab: Function, bc?: Function, cd?: Function, de?: Function, ef?: Function, fg?: Function): unknown {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function (self: unknown) {
        return bc!(ab.apply(self, arguments));
      };
    case 3:
      return function (self: unknown) {
        return cd!(bc!(ab.apply(self, arguments)));
      };
    case 4:
      return function (self: unknown) {
        return de!(cd!(bc!(ab.apply(self, arguments))));
      };
    case 5:
      return function (self: unknown) {
        return ef!(de!(cd!(bc!(ab.apply(self, arguments)))));
      };
    case 6:
      return function (self: unknown) {
        return fg!(ef!(de!(cd!(bc!(ab.apply(self, arguments))))));
      };
  }
}
