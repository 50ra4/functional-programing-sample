export const length = <T = unknown>(value: T): number => {
  if (Array.isArray(value)) {
    return value.length;
  }
  if (typeof value === 'string') {
    return value.length;
  }
  return NaN;
};
