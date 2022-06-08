import React, { FC, ReactNode, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { PasswordIcon } from "../icons";

interface InputProps {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  type?: string;
}
interface PasswordProps extends InputProps {
  showIcon: boolean;
}

const Password = ({ id, label, register,showIcon }: PasswordProps) => {
  const [showPass, setShowPass] = useState(false);
  if (showIcon){
  return (
    <div className="relative flex bg-white py-2 px-1 md:py-4 md:px-2 rounded-lg items-center focus-within:bg-gray-300 font-roboto">
      <label className="flex items-center pl-1" htmlFor="email">
        <PasswordIcon />
      </label>
      <input
        id={id}
        className="peer pl-4 h-10  w-full text-gray-900 placeholder-transparent focus:outline-none  focus:bg-gray-300"
        {...register}
        type={showPass ? "text" : "password"}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute left-10 top-0 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:-top-0 peer-focus:translate-y-0 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {showPass ? (
        <label
          htmlFor={id}
          className="h-full peer-placeholder-shown:hidden grid place-items-center"
          onClick={() => setShowPass(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
              clipRule="evenodd"
            />
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
          </svg>
        </label>
      ) : (
        <label
          htmlFor={id}
          className="h-full peer-placeholder-shown:hidden grid place-items-center"
          onClick={() => setShowPass(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      )}
    </div>
    
  );}
  return (
    <div className="relative flex bg-white py-2 px-1 md:py-4 md:px-2 rounded-lg items-center focus-within:bg-gray-300">
      <input
        id={id}
        className="peer pl-4 h-10  w-full text-gray-900 placeholder-transparent focus:outline-none  focus:bg-gray-300"
        {...register}
        type={showPass ? "text" : "password"}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute left-5 top-0 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:-top-0 peer-focus:translate-y-0 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {showPass ? (
        <label
          htmlFor={id}
          className="h-full peer-placeholder-shown:hidden grid place-items-center"
          onClick={() => setShowPass(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
              clipRule="evenodd"
            />
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
          </svg>
        </label>
      ) : (
        <label
          htmlFor={id}
          className="h-full peer-placeholder-shown:hidden grid place-items-center"
          onClick={() => setShowPass(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      )}
    </div>
    
  )
};

interface IconProps extends InputProps {
    icon:ReactNode
}
const Icon = ({ id, label, type, icon, register }: IconProps) => {
  return (
    <div className="relative flex bg-white py-2 px-1 md:py-4 md:px-2 rounded-lg items-center focus-within:bg-gray-300 font-roboto">
      <label className="flex items-center pl-1" htmlFor="email">
        {icon}
      </label>
      <input
        id={id}
        type={type}
        className="peer pl-4 h-10  w-full text-gray-900 placeholder-transparent focus:outline-none  focus:bg-gray-300"
        {...register}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute left-10 top-0 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:-top-0 peer-focus:translate-y-0 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};
const TextField=({id,label,register}:InputProps)=>{
    return(
        <div className="relative flex bg-white py-2 px-1 md:py-4 md:px-2 rounded-lg items-center focus-within:bg-gray-300 font-roboto">
        <textarea
          id={id}
          rows={4}
          className="peer pl-4 h-10  w-full text-gray-900 placeholder-transparent focus:outline-none  focus:bg-gray-300 min-h-[90px]"
          {...register}
          placeholder={label}
          
        />
        <label
          htmlFor={id}
          className="absolute left-5 top-0 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[20px] peer-focus:-top-0 peer-focus:translate-y-0 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          {label}
        </label>
      </div>
    )
}
const Input = ({
  id,
  label,
  
  type,
  register,
}: InputProps) => {
  return (
    <div className="relative flex bg-white py-2 px-1 md:py-4 md:px-2  rounded-lg items-center focus-within:bg-gray-300 font-roboto">
      <input
        id={id}
        type={type}
        className="peer pl-4 h-10  w-full text-gray-900 placeholder-transparent focus:outline-none  focus:bg-gray-300"
        {...register}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute left-5 top-0 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:-top-0 peer-focus:translate-y-0 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

Input.Password = Password;
Input.Icon=Icon
Input.TextField=TextField

export default Input;
