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
      <div className="flex flex-col justify-center  h-full pt-8 my-auto  md:pt-0 ">
        <h1 className="text-3xl md:text-4xl lg:text-[40px]  text-center md:text-left font-montserrat font-normal">
          Welcome back
        </h1>
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
              icon={<EmailIcon />}
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
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  id="remember-me"
                  className="w-4 h-4 bg-primaryColor rounded-[20px!important] "
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
          <div className="flex justify-center md:justify-start gap-10 ">
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

        <div>
          <div className="font-montserrat mt-8 lg:mt-10">
            <p className="text-center md:text-left">OR you can join with</p>
            <div className="flex gap-4 justify-center md:justify-start mt-2">
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
