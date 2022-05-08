
import { Register1,Register2,Register3 } from "../components/signupForms/";
import React, { FC, useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { NetFuseLogo } from "../components/icons/NetFuseLogo";
import { NetInput, typeEnum } from "../components/NetInput";
import { RegisterComponent } from "../components/RegisterComponent";


export interface FormData1 {
  fullname: string;
  bio: string;
  gender: string;
  occupation: string;
  country: string;
  state: string;
}
export interface FormData2 {
  "email-address": string;
  username: string;
  "phone-number": number;
  "signup-password": string;
  interests: string;
}
export interface FormData3 {
  website: string;
  "facebook-url": string;
  "twitter-url": string;
  "instagram-url": string;
}
const Register: FC = () => {
  const [progress, setProgress] = useState(1);

  const [focus, setFocus] = useState(false);

  const Form1 = useForm<FormData1>();
  const Form2 = useForm<FormData2>();
  const Form3 = useForm<FormData3>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function getClassName(progress: number, value: number) {
    if (progress === value) {
      return "translat-x-0 opacity-[1!important]";
    }
    if (progress < value) {
      return "translate-x-full  transition-opacity";
    }
    if (progress > value) {
      return "-translate-x-full  transition-opacity";
    }
  }

  return (
    <div className="relative grid w-full grid-cols-1 gap-0 md:grid-cols-3 md:gap-4 ">
      <RegisterComponent
        HeadText="Already a User?"
        PText="Login into your account and start engaging contents"
        CTAText="Login"
        position="right"
        link="/"
        className="order-2 md:order-1"
      />
      <div className="relative order-1 col-span-2 overflow-clip transition-all md:order-2 md:h-screen ">
        <div>
          <NetFuseLogo className="mx-auto my-4 w-80 justify-center" />
          <h1 className="text-center text-xl font-bold">Register an Account</h1>
          <div className="mx-auto flex w-6/12 items-center">
            {[1, 2, 3].map((index) => {
              if (index === 3) {
                return (
                  <div
                    className={
                      index <= progress
                        ? "h-6 w-6 animate-fill rounded-full bg-gray-200 delay-1000"
                        : "h-6 w-6 rounded-full bg-gray-200"
                    }
                  ></div>
                );
              }
              return (
                <>
                  <div
                    className={
                      index <= progress
                        ? "h-6 w-6 animate-fill rounded-full bg-gray-200 delay-1000"
                        : "h-6 w-6 rounded-full bg-gray-200"
                    }
                  ></div>
                  <div className="h-[2px] flex-1 bg-gray-200">
                    <div
                      className={
                        progress > index
                          ? "h-full animate-grow bg-red-400"
                          : "h-full"
                      }
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="mx-auto flex w-6/12 items-center justify-between">
            <p className="-translate-x-1/2 text-center text-sm">
              Person Details
            </p>
            <p className="text-center text-sm">Account Details</p>
            <p className="translate-x-1/2 text-center text-sm">
              Social Profiles
            </p>
          </div>
          <div className="overflow- relative mx-auto min-h-screen w-10/12 min-w-[310px] xs:p-2 md:min-h-screen md:p-0 lg:w-7/12">
            <Register1
              getClassName={getClassName}
              progress={progress}
              formHandler={Form1}
            />
            <Register2
              getClassName={getClassName}
              progress={progress}
              formHandler={Form2}
            />
            <Register3
              getClassName={getClassName}
              progress={progress}
              formHandler={Form3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
