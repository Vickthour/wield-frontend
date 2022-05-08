import React, { useState, FC, useEffect, useRef } from "react";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReturn } from "react-hook-form";
import { FormData1 } from "../../pages/register";
import { required, select } from "../../utils/validation";
import { NetInput, typeEnum } from "../NetInput";
import NetSelect from "../NetSelect";



const gender = [
  { id: 0, name: "Select your Gender", unavailable: true },
  { id: 1, name: "male", unavailable: false },
  { id: 2, name: "female", unavailable: false },
];
const country = [
  { id: 0, name: "Select your Country", unavailable: true },
  { id: 1, name: "Nigeria", unavailable: false },
  { id: 2, name: "Canada", unavailable: false },
];
const state = [
  { id: 0, name: "Select your Country", unavailable: true },
  { id: 1, name: "Lagos", unavailable: false },
  { id: 2, name: "Abuja", unavailable: false },
];
interface Register1 {
  getClassName: (progress: number, value: number) => string | undefined;
  progress: number;
  formHandler:UseFormReturn<FormData1, any>;
}

 const Register1: React.FC<Register1> = ({
  getClassName,
  progress,
  formHandler
}) => {
  const [overflow, setOverflow] = useState(false);
  const [allowedFormHeight, setAllowedFormHeight] = useState(0);
  const [formHeight, setFormHeight] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  }=formHandler

  const [clicked, setClicked] = useState(0);
  useEffect(() => {
    if (ref.current !== null) {
      setFormHeight(ref.current.clientHeight);
      setAllowedFormHeight(
        window.innerHeight - ref.current.getBoundingClientRect().top
      );
      console.log(formHeight, "form height");
      console.log(allowedFormHeight, "allowedHeight");
      setOverflow(
        ref.current.clientHeight >
          window.innerHeight - ref.current.getBoundingClientRect().top
      );
    }
  }, [clicked]);

  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={
        "absolute mt-4 w-full space-y-4 opacity-0 transition duration-1000  " +
        getClassName(progress, 1)
      }
      style={
        overflow
          ? {
              height: allowedFormHeight,
              overflowY: "auto",
            }
          : {}
      }
      onSubmit={handleSubmit((formData) => {
        console.log(formData, errors);
      })}
      ref={ref}
    >
      <NetInput
        id="fullname"
        label="Full Name"
        placeholder="Enter your full name"
        type={typeEnum.text}
        inputRef={register}
        validate={required()}
        errors={errors}
      />

      <div>
        <label htmlFor="gender">Gender</label>
        <br></br>
        <NetSelect datalist={gender} selectProps={register} id="gender" validate={select(gender)} errors={errors}/>
      </div>
      <div className="flex gap-1 md:gap-4">
        <div className="flex-1">
          <label htmlFor="country">Country</label>
          <br></br>
          <NetSelect datalist={country} selectProps={register} id="country" validate={select(country)} errors={errors} />
        </div>
        <div className="flex-1">
          <label htmlFor="">State</label>
          <br></br>
          <NetSelect datalist={state} selectProps={register} id="state" validate={select(state)} errors={errors} />
        </div>
      </div>
      <NetInput
        id="occupation"
        label="Ocuupation"
        placeholder="Enter your occupation"
        type={typeEnum.text}
        inputRef={register}
      />

      <NetInput
        id="bio"
        label="Bio"
        placeholder="Tell us a Little about yourself"
        type={typeEnum.textarea}
        inputRef={register}
      />
      <button
        className="grid w-full place-items-center rounded-3xl bg-red-500  py-2.5 text-white"
        type="submit"
        onClick={() => setClicked((v: number) => v + 1)}
      >
        Next
      </button>
    </form>
  );
};

export default Register1