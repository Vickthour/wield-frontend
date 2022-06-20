import { variantProps, VariantPropsOf } from "classname-variants/react";
import React, { FC } from "react";

interface iconProps {
  icon?: React.ReactNode;
  iconPosition?:"left" | "right";
}

const tw =String.raw
const buttonClasses = variantProps({
  base: tw`inline-flex items-center gap-1 focus:outline-none transition ease-in-out duration-300 active:scale-95 `,
  variants: {
    size: {
      sm: tw`px-2 py-1 text-sm`,
      md: "px-4 py-2",
      lg: "px-8 py-3 text-lg",
      full: "w-full justify-center  py-2",
    },
    color: {
      primary: "bg-primaryColor text-white",
      pink: "bg-[#FF685B0F] text-black",
      gray: tw`bg-gray-200 text-gray-700`,
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
    shape: {
      rounded: tw`rounded-2xl`,
      pill: tw`rounded-full`,
      square: tw`rounded-none`,
    },
    outlined: {
      true: tw`border`,
    },
    shadow: {
      true: tw`shadow-md`,
    },
  },
  compoundVariants: [
    {
      variants: {
        color: "primary",
        outlined: true,
      },
      className:
        "border-primaryColor bg-transparent text-primaryColor hover:bg-primaryColor hover:text-white",
    },
    {
      variants: {
        color: "gray",
        outlined: true,
      },
      className: tw`border-gray-700 bg-[transparent] text-gray-700 hover:bg-gray-700 hover:text-white`,
    },
  ],

  defaultVariants: {
    size: "md",
    color: "primary",
    shape: "pill",
    shadow: false,
  },
});
type ButtonProps = JSX.IntrinsicElements["button"] &
  VariantPropsOf<typeof buttonClasses> & iconProps;
const Button: FC<ButtonProps> = ({children,icon,iconPosition,...props}) => {
  return <button {...buttonClasses(props)}>
    {iconPosition==="left"?icon:null}
    {children}
    {iconPosition==="right"?icon:null}
  </button>;
};

export default Button
