import Link from "next/link";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage, IconButton, Input} from "../components/base";
import {EmailIcon, FacebookIcon, GoogleIcon, LinkedInIcon,} from "../components/icons";
import AuthFormLayout from "../components/layouts/AuthFormLayout";

interface FormProps {
    email: string;
}

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        control,
        formState: {errors},
    } = useForm<FormProps>();
    const [done, setDone] = useState(false);
    const onSubmit = handleSubmit((data: any) => {
        console.log(data);
        setDone(true);
    });
    return (
      <AuthFormLayout>
        <div className="flex h-full  flex-col md:justify-center">
          <div className="font-montserrat text-center md:text-left">
            <h1 className="text-2xl  md:text-4xl">Forgot Password</h1>
            <p className="mt-0.5 md:mt-1 lg:mt-2">
              Enter your email address to reset your password
            </p>
          </div>

          {done ? (
            <div className="font-montserrat grid place-items-center py-32 md:py-48">
              <p className="">A password reset link as been sent to</p>
              <h3 className="font-xl font-semibold">{getValues("email")}</h3>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="pt-20">
              <Input.Icon
                icon={<EmailIcon size="lg" />}
                register={register("email", {
                  required: "email needed",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "invalid email",
                  },
                })}
                label="Email Address"
                id="email"
              />
              <ErrorMessage error={errors?.email?.message} />
              <div>
                <button
                  className="mx-auto mt-10 block w-9/12 origin-center rounded-full bg-primaryColor py-4 text-center font-semibold text-white active:scale-95 disabled:bg-zinc-300 disabled:active:scale-100 md:w-full md:py-6"
                  aria-label="next form"
                  type="submit"
                  disabled={Boolean(errors.email?.message)}
                >
                  NEXT
                </button>
              </div>
            </form>
          )}
          <p className="font-montserrat mt-4 text-center">
            Already a use?{" "}
            <Link href={"/login"} passHref>
              <a href="#" className="text-primaryColor">
                LOGIN
              </a>
            </Link>
          </p>
          <div className="font-montserrat mt-8 lg:mt-10">
            <p className="text-center ">OR you can join with</p>
            <div className="mt-2 flex justify-center gap-4">
              <IconButton icon={<FacebookIcon />} className="bg-[#345FCB1A]" />
              <IconButton icon={<GoogleIcon />} className="bg-[#FF685B0F]" />
              <IconButton icon={<LinkedInIcon />} className="bg-[#1976D21A]" />
            </div>
          </div>
        </div>
      </AuthFormLayout>
    );
};

export default ForgotPassword;
