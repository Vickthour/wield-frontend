import { selectItem } from "../components/NetSelect";

export const required = (message?: string): object => {
  return {
    required: message || "This field is required",
  };
};
export const minLength = (min: number, message?: string): object => {
  return {
    value: min,
    message: message || `This field must be at least ${min} characters`,
  };
};
export const password = (message?: string): object => {
  return {
    ...minLength(8, message),
    validate: (value: string) => {
      return (
        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
          pattern.test(value)
        ) ||
        "password must contain lowercase,uppercase,digit,and special character"
      );
    },
  };
};

export const email: object = () => {
  return {
    value: /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
    message: "invalid email",
  };
};
export const select = (datalist: selectItem[], message?: string): object => {
  return {
    validate: (value: string) => {
      if (datalist[0].name === value) {
        return message || "Choose a valid option";
      }
    },
  };
};
