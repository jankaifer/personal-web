export const transformArrayToObjectByField = <
  T extends object,
  K extends keyof T
>(
  objs: T[],
  field: K
) => Object.fromEntries(objs.map((obj) => [obj[field], obj]));
