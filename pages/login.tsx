import React from "react";
import AuthFormLayout from "../components/layouts/AuthFormLayout";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconButton, Input } from "../components/base";
import {
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
} from "../components/icons";

type loginInputs = {
  "email/username": string;
  password: string;
  rememberMe: boolean;
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
      <div className="my-auto flex h-full  flex-col md:justify-center pt-8  md:pt-0 ">
        <h1 className="font-montserrat text-center text-3xl  font-normal md:text-left md:text-4xl lg:text-[40px]">
          Welcome
        </h1>
        <p className="font-montserrat text-center text-base md:text-left ">
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
              icon={<EmailIcon />}
              register={register("email/username")}
            />
          </div>
          <div className="mb-8 flex flex-col pt-4">
            <Input.Password
              id="password"
              label="Password"
              type="password"
              register={register("password")}
              showIcon
            />
            <div className="flex justify-between mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  id="remember-me"
                  className="h-4 w-4 rounded-[20px!important] bg-primaryColor "
                />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <Link href="/forgot-password" passHref>
                <a href="#" className="text-primaryColor">
                  Forgot Password?
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center gap-10 md:justify-start ">
            <button
              type="submit"
              className="origin-center  rounded-full bg-primaryColor px-8 py-4 text-center text-base font-semibold capitalize text-white shadow-md transition duration-200 ease-in hover:bg-primaryLightColor focus:outline-none  focus:ring-2 active:scale-95 md:px-10 md:py-5 lg:px-16"
            >
              <span className="w-full">Submit</span>
            </button>
            <Link href="/register" passHref>
              <a
                href="#"
                className="origin-center rounded-full bg-transparent bg-white px-8 py-4 text-center text-base font-semibold  capitalize text-blackShade shadow-md transition duration-200 ease-in hover:bg-white hover:text-black focus:outline-none focus:ring-2 active:scale-95 md:px-10 md:py-5 lg:px-16"
              >
                <span className="w-full">Signup</span>
              </a>
            </Link>
          </div>
        </form>

        <div>
          <div className="font-montserrat mt-4 lg:mt-8">
            <p className="text-center md:text-left">OR you can join with</p>
            <div className="mt-2 flex justify-center gap-4 md:justify-start">
              <IconButton icon={<FacebookIcon />} className="bg-[#345FCB1A]" />
              <IconButton icon={<GoogleIcon />} className="bg-[#FF685B0F]" />
              <IconButton icon={<LinkedInIcon />} className="bg-[#1976D21A]" />
            </div>
          </div>
        </div>
      </div>
    </AuthFormLayout>
  );
};

export default Login;
