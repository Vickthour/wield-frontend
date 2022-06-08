import { FC } from "react";
import { Control, useForm } from "react-hook-form";
import { StepWizardChildProps } from "react-step-wizard";
import { ErrorMessage, Input } from "../../base";

import Link from "next/link";
import { useFormData } from "../../context/formContext";

export type SocialInputs = {
  "full name": string;
  gender: "male" | "female";
  country: string;
  state: string;
  occupation: string;
  bio: string;
  email: string;
  username: string;
  phoneNumber: string;
  password: string;
  website?: string;
  facebook: string;
  instagram: string;
  twitter: string;
  interest: string;
};
interface SocialFormProps {
}
export type SocialFormPropsExtended = Partial<StepWizardChildProps> &
  SocialFormProps;

const Social: FC<SocialFormPropsExtended> = ({ goToStep}) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm<SocialInputs>();

  const formHandler = useFormData();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formHandler?.setFormValues(data);
    console.log(formHandler?.data)
    formHandler?.setDone(true);
    
  });

  return (
    <form className="space-y-2.5 mt-4" onSubmit={onSubmit}>
      <Input
        label="Website (Optional)"
        register={register("website")}
        id="website"
      />      
      <Input label="Facebook" register={register("facebook",{required:'facebook user url required'})} id="facebook" />
        <ErrorMessage error={errors.facebook?.message} />
      <Input
        label="Instagram"
        register={register("instagram",{required:'instagram user url required'})}
        id="instagram"
      />
        <ErrorMessage error={errors.instagram?.message} />
      <Input label="Twitter" register={register("twitter",{required:'twitter user url required'})} id="twitter" />
        <ErrorMessage error={errors.twitter?.message} />
      <Input label="Interest" register={register("interest",{required:'interests are required'})} id="interest" />
        <ErrorMessage error={errors.interest?.message} />
      <div>
        <button
          className="rounded-full mt-[50px!important] block w-9/12 mx-auto py-4 md:w-full md:py-6 text-center disabled:bg-gray-300 bg-primaryColor text-white"
          aria-label="next form"
          type="submit"
        >
          NEXT
        </button>
        <p className="font-roboto text-center mt-4">
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
export default Social;
