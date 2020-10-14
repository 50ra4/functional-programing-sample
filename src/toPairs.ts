export const toPairs = <T extends object>(obj: T) => Object.entries(obj) as [keyof T, T[keyof T]][];
