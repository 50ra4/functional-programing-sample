import { clone } from '.';

export const toPairs = <T extends object>(obj: T) => Object.entries(clone(obj)) as [keyof T, T[keyof T]][];
