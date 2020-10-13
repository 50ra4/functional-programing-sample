export const isDate = (v: unknown): v is Date => v instanceof Date;
export const isISOStringDateFormat = (value: string): boolean =>
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value);
export const isISOStringDateStr = (value: unknown): value is string =>
  typeof value === 'string' && isISOStringDateFormat(value);

export const date2dateStr = (date: unknown): string => (isDate(date) ? date : new Date(0)).toISOString();
export const dateStr2date = (dateStr: string): Date => new Date(Date.parse(dateStr));
