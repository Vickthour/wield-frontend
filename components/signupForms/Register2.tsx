import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData2 } from "../../pages/register";
import { NetInput, typeEnum } from "../NetInput";

interface Register2 {
  getClassName: (progress: number, value: number) => string | undefined;
  progress: number;
  formHandler: UseFormReturn<FormData2, any>;
}
const Register2: FC<Register2> = ({ getClassName, progress, formHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHandler;
  return (
    <form
      className={
        "absolute mt-4 w-full space-y-4 opacity-0 transition duration-1000 " +
        getClassName(progress, 2)
      }
      onSubmit={handleSubmit((formData) => {
        console.log(formData, errors);
      })}
    >
      <NetInput
        id="email-address"
        label="Email Adress"
        placeholder="Enter your Email Adress"
        type={typeEnum.email}
        inputRef={register}
      />
      <NetInput
        id="username"
        label="Username"
        placeholder="Enter your Prefer Username"
        type={typeEnum.text}
        inputRef={register}
      />
      <NetInput
        id="phone-number"
        label="Phone Number"
        placeholder="Enter your Phone Number"
        type={typeEnum.number}
        inputRef={register}
      />
      <NetInput
        id="signup-password"
        label="Password"
        placeholder="Enter your Password"
        type={typeEnum.password}
        inputRef={register}
        validate={{
          minLength: {
            value: 8,
            message: "password as to be longer that 8 characters", // JS only: <p>error message</p> TS only support string
          },
          validate: (value: string) => {
            return (
              [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                pattern.test(value)
              ) ||
              "password must contain lowercase,uppercase,digit,and special character"
            );
          },
        }}
        errors={errors}
      />
      <button
        className="grid w-full place-items-center rounded-3xl bg-red-500 py-2.5 text-white"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default Register2;
