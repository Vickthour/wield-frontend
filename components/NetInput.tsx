import React, { FC, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
export enum typeEnum {
  text = "text",
  password = "password",
  email = "email",
  number = "number",
  textarea = "textarea",
}
interface NetInputProp {
  id: string;
  label: string;
  inputRef: UseFormRegister<any>;
  placeholder?: string;
  className?: string;
  type?: typeEnum;
  validate?: object;
  errors?: FieldErrors;
}
export const NetInput: FC<NetInputProp> = ({
  id,
  label,
  placeholder,
  inputRef,
  validate,
  errors,
  type,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [focus, setFocus] = useState(false);
  function onFocus() {
    setFocus(true);
  }
  function onBlur() {
    setFocus(false);
  }

  if (type === "password") {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <div
          className={
            focus
              ? "flex  w-full  items-center rounded-[9999px]  border-2 border-slate-700 transition"
              : "flex w-full items-center  rounded-[9999px] border  border-slate-400 transition  focus:border-none"
          }
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <input
            type={showPass ? "text" : type}
            id={id}
            className="flex-1 rounded-l-3xl p-1.5 focus:outline-none"
            {...inputRef(id, { ...validate })}
          />
          {showPass ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setShowPass((showPass) => !showPass)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setShowPass((showPass) => !showPass)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          )}
        </div>
        <p className="text-red-500">
          {errors ? errors["signup-password"]?.message : ""}
        </p>
      </div>
    );
  }
  if (type === "text" || type === "email" || type === "number") {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <div
          className={
            focus
              ? "w-ful  flex  items-center rounded-3xl  border-2 border-slate-700 transition"
              : "flex w-full items-center  rounded-3xl border  border-slate-400 transition  focus:border-none "
          }
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            className="flex-1 rounded-3xl p-1.5 focus:outline-none"
            {...inputRef(id, { ...validate })}
          />
        </div>
        <p className="text-red-500">{errors ? errors.fullname?.message : ""}</p>
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <div
          className={
            focus
              ? "w-ful  flex  items-center rounded-[9999px]  border-2 border-slate-700 transition"
              : "flex w-full items-center  rounded-[9999px] border  border-slate-400 transition  focus:border-none "
          }
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <textarea
            placeholder={placeholder}
            id={id}
            className="flex-1 rounded-[9999px] p-3 focus:outline-none"
            {...inputRef(id, { ...validate })}
            rows={2}
          />
        </div>
      </div>
    );
  }

  return null;
};
