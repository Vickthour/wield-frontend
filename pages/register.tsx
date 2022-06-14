import { ProgressBar } from "../components/inc/ProgressBar";
import React, { FC, useEffect } from "react";
import AuthFormLayout from "../components/layouts/AuthFormLayout";
import Image from "next/image";
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
        <FormProvider>
          <div className="font-montserrat text-center md:text-left">
            <RegisterHeader />
          </div>
          <MultiStepForm />
          <Success />
        </FormProvider>
      </div>
    </AuthFormLayout>
  );
};

const MultiStepForm: FC = () => {
  const formHandler = useFormData();
  return (
    <StepWizard
      nav={<ProgressBar />}
      isHashEnabled
      className={`${
        formHandler?.done ? "hidden " : "d flex flex-col"
      } notice-me justify-center`}
    >
      <Personal hashKey="personal-details" />
      <Account hashKey="account-details" />
      <Social hashKey="social-info" />
    </StepWizard>
  );
};
const RegisterHeader: FC = () => {
  const formHandler = useFormData();

  return (
    <>
      {formHandler?.done ? (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl  md:text-4xl">Hooray!</h1>
          <Image
            src="/img/hooray.svg"
            className="animate-scale-up"
            alt="hurray emoji"
            height={30}
            width={31.54}
          />
        </div>
      ) : (
        <h1 className="text-2xl  md:text-4xl">Register an Account</h1>
      )}
      <p className="mt-0.5 md:mt-1 lg:mt-2">
        {formHandler?.done
          ? "The community awaits you"
          : "Join us and start sharing, connecting and earning."}
      </p>
    </>
  );
};
export default Register;
