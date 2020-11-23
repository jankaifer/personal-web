export const assert: (
  condition: boolean,
  message?: string
) => asserts condition = (
  condition: boolean,
  message: string = "Assertion Error."
) => {
  if (!condition) {
    throw Error(message);
  }
};
