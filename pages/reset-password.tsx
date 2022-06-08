import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Input } from "../components/base";
import Navbar from "../components/inc/Navbar";

interface PasswordReset {
  newPassword: string;
  confirmNewPassword: string;
}
const ResetPass = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm<PasswordReset>();
  return (
    <main className="bg-background min-h-screen flex">
      <div className="container mx-auto px-4 flex flex-col">
        <Navbar />
        <div className="flex-1 pt-10 flex justify-center md:items-center">
          <form className="w-11/12 max-w-xl flex flex-col" onSubmit={handleSubmit(data=>console.log(data))}>
            <h1 className="font-medium text-center font-montserrat text-2xl">
              Reset Password
            </h1>
            <div className="flex flex-col gap-4 mt-4">
              <Input.Password
                label="Password"
                register={register("newPassword", {
                  required: "password required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "password must be less than 20 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})/,
                    message:
                      "password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
                  },
                })}
                id="new-password"
                showIcon
              />
              <ErrorMessage error={errors?.newPassword?.message} />
              <Input.Password
                label="Confirm Password"
                register={register("confirmNewPassword", {
                  required: "password confirmation is required",
                  validate:(value) => value===getValues("newPassword") || "passwords aren't equal required",
                })}
                id="confirm-new-password"
                showIcon
              />
                <ErrorMessage error={errors?.confirmNewPassword?.message} />
            </div>
            <div>
              <button
                className="rounded-full mt-10 block w-9/12 mx-auto py-4 md:w-full md:py-6 text-center font-semibold active:scale-95 disabled:active:scale-100 origin-center disabled:bg-zinc-300 bg-primaryColor text-white"
                aria-label="next form"
                type="submit"
                disabled={Boolean(errors.newPassword?.message)}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPass;
