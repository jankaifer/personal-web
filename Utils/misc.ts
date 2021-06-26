import md5 from "crypto-js/md5";

export const transformArrayToObjectByField = <
  T extends object,
  K extends keyof T
>(
  objs: T[],
  field: K
) => Object.fromEntries(objs.map((obj) => [obj[field], obj]));

export const getGravatarSrc = (email: string) => {
  const hash = md5(email.trim().toLowerCase());
  const gravatarUri = `https://www.gravatar.com/avatar/${hash}`;
  return gravatarUri;
};
