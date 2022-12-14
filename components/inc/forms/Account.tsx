import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";
import { ErrorMessage, Input } from "../../base";
import { useFormData } from "../../context/formContext";

export type AccountInputs = {
  email: string;
  username: string;
  phoneNumber: string;
  password: string;
};
interface AccountFormProps {}
export type AccountFormPropsExtended = Partial<StepWizardChildProps> &
  AccountFormProps;

const Account: FC<Partial<StepWizardChildProps> & AccountFormProps> = ({
  nextStep,
  goToStep,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm<AccountInputs>();
  const formHandler = useFormData();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formHandler?.setFormValues(data);
    console.log(formHandler?.data);
    goToStep?.(3);
  });

  return (
    <form className="mt-2 space-y-1.5" onSubmit={onSubmit}>
      {" "}
      <Input
        label="Email Address"
        register={register("email", {
          required: "email required",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "invalid email",
          },
        })}
        id="email address"
      />
      <ErrorMessage error={errors.email?.message} />
      <Input
        label="Username"
        register={register("username", { required: "username required" })}
        id="username"
      />
      <ErrorMessage error={errors.username?.message} />
      <Input
        label="Phone Number"
        register={register("phoneNumber", {
          required: "phone number required",
        })}
        id="phone number"
      />
      <ErrorMessage error={errors.phoneNumber?.message} />
      <Input.Password
        id="password"
        label="Password"
        type="password"
        register={register("password", {
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
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            message:
              "password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
          },
        })}
        showIcon={false}
      />
      <ErrorMessage error={errors.password?.message} />
      <div>
        <button
          className="mx-auto mt-[50px!important] block w-9/12 rounded-full bg-gradient-to-tr from-primaryColor via-primaryColor to-[#FF685B1A] py-4 text-center text-white disabled:bg-gray-300 md:w-full md:py-6"
          aria-label="next form"
          type="submit"
        >
          NEXT
        </button>
        <p className="font-roboto mt-4 text-center">
          Already have an Account?{" "}
          <Link href={"/login"} passHref>
            <a href="#" className="text-primaryColor">
              Login
            </a>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Account;
