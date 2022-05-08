import type { NextPage } from "next";
import React, { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { NetInput, typeEnum } from "../components/NetInput";
import { NetFuseLogo } from "../components/icons/";
import { RegisterComponent } from "../components/RegisterComponent";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  password: string;
}

const Home: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
      <div className="col-span-2 md:h-screen">
        <div className="mx-auto w-6/12 min-w-[320px] sm:p-2 ">
          <NetFuseLogo className="my-4 w-1/2 items-center justify-center" />
          <h1 className="mt-12 mb-8 text-center text-2xl font-bold">
            Login to your Acount
          </h1>
          <form
            className="mt-2 flex flex-col gap-6"
            onSubmit={handleSubmit((formData) =>
              console.log(formData, "formData")
            )}
          >
            <NetInput
              id="name"
              label="Name"
              inputRef={register}
              placeholder="Enter your username"
              type={typeEnum.text}
            />
            <NetInput
              id="password"
              label="Password"
              inputRef={register}
              placeholder="Enter your email password"
              type={typeEnum.password}
            />
            <div>
              <button
                className="grid w-full place-items-center rounded-3xl bg-red-500 py-2.5 text-white"
                type="submit"
              >
                LOGIN
              </button>
              <p className="mt-2 text-center">Forgot password?</p>
            </div>
          </form>
          <div className="mt-4 flex items-center gap-1">
            <div className="h-0.5 flex-1 bg-gray-300"></div>
            <h1>OR</h1>
            <div className="h-0.5 flex-1 bg-gray-300"></div>
          </div>
          <p className="mt-4 text-center">Login Using Social Networks</p>
          <div className="mx-auto mt-4 flex w-5/12 items-center justify-between ">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-200">
              <svg
                width="13"
                height="24"
                viewBox="0 0 13 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.69 24H8.085V13.05H11.76L12.315 8.79H8.085V6.06C8.085 4.83 8.43 3.99 10.2 3.99H12.465V0.165C12.075 0.12 10.74 0 9.18 0C5.91 0 3.69 1.995 3.69 5.64V8.79H0V13.05H3.69V24Z"
                  fill="#345FCB"
                />
              </svg>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-red-200">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.82 10.6925C24.9738 11.5163 25.0575 12.3775 25.0575 13.2763C25.0575 20.3063 20.3525 25.305 13.2463 25.305C11.6302 25.3055 10.0299 24.9876 8.53675 24.3693C7.04362 23.7511 5.68693 22.8448 4.54421 21.7021C3.40148 20.5593 2.49512 19.2026 1.87691 17.7095C1.2587 16.2164 0.940762 14.6161 0.941254 13C0.940762 11.384 1.2587 9.78364 1.87691 8.29051C2.49512 6.79737 3.40148 5.44068 4.54421 4.29796C5.68693 3.15524 7.04362 2.24888 8.53675 1.63067C10.0299 1.01246 11.6302 0.694515 13.2463 0.695008C16.5688 0.695008 19.345 1.91751 21.475 3.90251L18.0063 7.37126V7.36251C16.715 6.13251 15.0763 5.50126 13.2463 5.50126C9.18625 5.50126 5.88625 8.93126 5.88625 12.9925C5.88625 17.0525 9.18625 20.49 13.2463 20.49C16.93 20.49 19.4375 18.3838 19.9525 15.4913H13.2463V10.6925H24.8213H24.82Z"
                  fill="#FF685B"
                />
              </svg>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-200">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.78625 9.21125H14.4287V11.5237C15.0975 10.1937 16.8125 8.99875 19.3887 8.99875C24.3275 8.99875 25.5 11.6462 25.5 16.5037V25.5H20.5V17.61C20.5 14.8437 19.8312 13.2837 18.1287 13.2837C15.7675 13.2837 14.7862 14.965 14.7862 17.6087V25.5H9.78625V9.21125ZM1.2125 25.2875H6.2125V8.99875H1.2125V25.2875ZM6.92875 3.6875C6.92894 4.10659 6.84582 4.52154 6.68423 4.90823C6.52265 5.29492 6.28581 5.64564 5.9875 5.94C5.383 6.54078 4.56476 6.87707 3.7125 6.875C2.86174 6.87443 2.04539 6.539 1.44 5.94125C1.14276 5.64589 0.906732 5.29478 0.74543 4.90804C0.584127 4.5213 0.500724 4.10653 0.5 3.6875C0.5 2.84125 0.8375 2.03125 1.44125 1.43375C2.04611 0.835198 2.8628 0.499626 3.71375 0.5C4.56625 0.5 5.38375 0.83625 5.9875 1.43375C6.59 2.03125 6.92875 2.84125 6.92875 3.6875Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <RegisterComponent
        HeadText="New Here?"
        PText="Sign up and discover a great amount of new opportunities"
        CTAText="Sign up"
        link="/register"
      />
    </div>
  );
};

export default Home;
