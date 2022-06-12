import React, { FC, useEffect, useState } from "react";
import { Input, ListBox } from "../../base";
import countries from "../../../data/countries.json";
import { useForm } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";
import Link from "next/link";
import { useFormData } from "../../context/formContext";
import { ErrorMessage } from "../../base";

export type PersonalInputs = {
  "full name": string;
  gender: "male" | "female";
  country: string;
  state: string;
  occupation: string;
  bio: string;
};

interface PersonalFormProps {}
export type PersonalFormPropsExtended = Partial<StepWizardChildProps> &
  PersonalFormProps;

const Personal: FC<PersonalFormPropsExtended> = ({ goToStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm<PersonalInputs>();
  const formHandler = useFormData();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formHandler?.setFormValues(data);
    goToStep?.(2);
  });
  const actualCountries = countries.map((country) => ({
    name: country.name,
    id: country.code2,
  }));
  const [actualState, setActualState] = useState([{ name: "Loading", id: "" }]);
  const countryMonitor = watch("country");
  useEffect(() => {
    if (countryMonitor) {
      const state = countries
        .filter((country) => country.name === getValues("country"))[0]
        .states.map((state) => ({ name: state.name, id: state.code }));
      if (JSON.stringify(state) !== JSON.stringify(actualState)) {
        setActualState(state);
        console.log("rerendered");
      }
    }
  }, [actualState, countryMonitor, getValues]);
  return (
    <form className="mt-4 space-y-2.5" onSubmit={onSubmit}>
      <Input
        id="full-name"
        label="Full Name"
        register={register("full name", { required: "full name is required" })}
      />
      <ErrorMessage error={errors["full name"]?.message} />
      <ListBox
        label="Gender"
        formName="gender"
        control={control}
        options={[
          { id: "M", name: "male" },
          { name: "female", id: "F" },
        ]}
      />
      <ErrorMessage error={errors.gender?.message} />
      <div className="flex w-full flex-col gap-2.5 md:flex-row">
        <div className="flex-1">
          <ListBox
            control={control}
            formName="country"
            label="Country"
            options={actualCountries}
          />
          <ErrorMessage error={errors.country?.message} />
        </div>
        <div className="flex-1">
          <ListBox
            label="State"
            formName="state"
            control={control}
            options={actualState}
          />
          <ErrorMessage error={errors.state?.message} />
        </div>
      </div>
      <Input
        id="occupation"
        label="Occupation"
        register={register("occupation", {
          required: "occupation is required",
        })}
      />
      <ErrorMessage error={errors.occupation?.message} />

      <Input.TextField
        id="bio"
        label="Bio"
        register={register("bio", { required: "bio is required" })}
      />
      <ErrorMessage error={errors.bio?.message} />

      <div>
        <button
          className="mx-auto mt-[50px!important] block w-9/12 rounded-full bg-primaryColor py-4 text-center text-white disabled:bg-gray-300 md:w-full md:py-6"
          aria-label="next form"
          type="submit"
        >
          NEXT
        </button>
        <p className="font-roboto mt-4 text-center">
          Already have an Account?{" "}
          <Link href={"/login"} passHref>
            <a href="#" className="text-primaryColor">
              Login
            </a>
          </Link>
        </p>
      </div>
    </form>
  );
};
export default Personal;
