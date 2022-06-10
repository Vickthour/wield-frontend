import React, { FC } from "react";
import { StepWizardChildProps } from "react-step-wizard";
import { useFormData } from "../../context/formContext";

const Success: FC = () => {
  const formHandler = useFormData();

  return (
    <div className={`${formHandler.done ? "" : "hidden"} font-roboto w-full `}>
      <div className="grid place-items-center pt-32 pb-20 md:pt-48">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-scale-up"
        >
          <path
            d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74122C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173312 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5629 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6449 80 47.9113 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21428 50.6087 0 40 0ZM66.125 26.575L33.275 59.4L13.875 40C13.212 39.337 12.8395 38.4377 12.8395 37.5C12.8395 36.5623 13.212 35.6631 13.875 35C14.5381 34.337 15.4373 33.9645 16.375 33.9645C17.3127 33.9645 18.212 34.337 18.875 35L33.325 49.45L61.175 21.625C61.5033 21.2967 61.8931 21.0363 62.322 20.8586C62.751 20.6809 63.2107 20.5895 63.675 20.5895C64.1393 20.5895 64.5991 20.6809 65.028 20.8586C65.457 21.0363 65.8467 21.2967 66.175 21.625C66.5033 21.9533 66.7637 22.3431 66.9414 22.772C67.1191 23.201 67.2106 23.6607 67.2106 24.125C67.2106 24.5893 67.1191 25.049 66.9414 25.478C66.7637 25.9069 66.5033 26.2967 66.175 26.625L66.125 26.575Z"
            fill="#FC3E03"
          />
        </svg>
        <p className="mt-4">Sign up completed</p>
      </div>
      <div className="space-y-2 text-center">
        <p>A confirmation link has been sent to your email</p>
        <h3 className="text-xl font-semibold">{formHandler?.data?.email}</h3>
      </div>
    </div>
  );
};

export default Success;
