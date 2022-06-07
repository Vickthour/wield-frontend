import React from "react";
import AuthFormLayout from "../components/layouts/AuthFormLayout";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/base";
import { EmailIcon } from "../components/icons";

type loginInputs = {
  "email/username": string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginInputs>();
  const onSubmit: SubmitHandler<loginInputs> = (data) => console.log(data);
  return (
    <AuthFormLayout>
      <div className="flex flex-col justify-center  h-full pt-8 my-auto  md:pt-0 ">
        <h1 className="text-3xl md:text-4xl lg:text-[40px]  text-center md:text-left font-montserrat font-normal">Welcome back</h1>
        <p className="font-montserrat text-base text-center md:text-left ">
          To keep connected with us, please login with your personal details
        </p>
        <form
          className="flex flex-col pt-3 md:pt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col pt-4">
            <Input.Icon
              id="email"
              label="Email Address/Username"
              icon={<EmailIcon/>}
              register={register("email/username")}
            />
          </div>
          <div className="flex flex-col pt-4 mb-12">
            <Input.Password
              id="password"
              label="Password"
              type="password"
              register={register("password")}
              showIcon
            />
          </div>
          <div className="flex justify-center gap-10">
            <button
              type="submit"
              className="rounded-full  px-8 py-4 md:px-10 md:py-5 lg:px-16 text-base capitalize font-semibold text-center text-white transition duration-200 ease-in bg-primaryColor shadow-md  hover:bg-primaryLightColor active:scale-95 origin-center focus:outline-none focus:ring-2"
            >
              <span className="w-full">Submit</span>
            </button>
            <Link href="/register" passHref>
              <a
                href="#"
                className="px-8 py-4 md:px-10 md:py-5 lg:px-16 rounded-full text-base capitalize bg-transparent  font-semibold text-center text-blackShade transition duration-200 ease-in bg-white shadow-md hover:text-black hover:bg-white active:scale-95 origin-center focus:outline-none focus:ring-2"
              >
                <span className="w-full">Signup</span>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </AuthFormLayout>
  );
};

export default Login;
