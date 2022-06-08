import { ProgressBar } from "../components/inc/ProgressBar";
import React, { FC, useEffect } from "react";
import AuthFormLayout from "../components/layouts/AuthFormLayout";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  Control,
  UseFormGetValues,
} from "react-hook-form";
import StepWizard, { StepWizardChildProps } from "react-step-wizard";
import { Personal, Account, Social, Success } from "../components/inc/forms/";
import FormProvider, {
  FormContext,
  useFormData,
} from "../components/context/formContext";

const Register = () => {
  return (
    <AuthFormLayout>
      <div className="flex h-full  flex-col md:justify-center">
        <div className="text-center md:text-left font-montserrat">
          <h1 className="text-2xl  md:text-4xl">Register an Account</h1>
          <p className="mt-0.5 md:mt-1 lg:mt-2">
          Join us and start sharing, connecting and earning.
          </p>
    <FormProvider>

          <MultiStepForm/>
      <Success />

    </FormProvider>

        </div>
      </div>
    </AuthFormLayout>
  );
};

const MultiStepForm: FC = () => {
  const formHandler = useFormData();
  const [done, setDone] = React.useState(formHandler?.done);
  useEffect(()=>{
    setDone(formHandler?.done);
  },[formHandler])
  return (
      <StepWizard
        nav={<ProgressBar />}
        isHashEnabled
        className={`${
          formHandler?.done ? "hidden " : "flex flex-col d"
        } notice-me justify-center`}
      >
        <Personal hashKey="personal-details" />
        <Account hashKey="account-details" />
        <Social hashKey="social-info" setDone={setDone} />
      </StepWizard>

  );
};
export default Register;
