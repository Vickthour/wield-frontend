import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData3 } from "../../pages/register";
import { NetInput, typeEnum } from "../NetInput";

interface Register3 {
  getClassName: (progress: number, value: number) => string | undefined;
  progress: number;
  formHandler:UseFormReturn<FormData3, any>;
}
const Register3:FC<Register3>=({
  getClassName,
  progress,
  formHandler
}) =>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  }=formHandler;
  return <form className={"absolute mt-4 w-full space-y-4 opacity-0 transition duration-1000 " + getClassName(progress, 3)}>
              <NetInput id="website" label="Website (optional)" placeholder="Enter your website Adress" type={typeEnum.text} inputRef={register} />
              <NetInput id="facebook-url" label="Facebook" placeholder="Enter your Facebook username" type={typeEnum.text} inputRef={register} />
              <NetInput id="instagram-url" label="Instagram" placeholder="Enter your Instagram Handle" type={typeEnum.text} inputRef={register} />
              <NetInput id="twitter-url" label="Twitter" placeholder="Enter your Twitter Handle" type={typeEnum.text} inputRef={register} />
              <NetInput id="interests" label="Interests" placeholder="Enter your Interests" type={typeEnum.text} inputRef={register} />
              <button className="grid w-full place-items-center rounded-3xl bg-red-500 py-2.5 text-white" type="submit">
                Sign Up
              </button>
            </form>;
}
  
export default Register3