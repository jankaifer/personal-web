import { createContext, useContext } from "react";

export const createSafeContext = <T>(name: string) => {
  const context = createContext<T | null>(null);
  const useSafeContext = () => {
    const contextValue = useContext(context);
    if (contextValue === null) {
      throw new Error(`Trying to access undefined context: "${name}"`);
    }
    return contextValue;
  };
  return [context, useSafeContext] as const;
};
