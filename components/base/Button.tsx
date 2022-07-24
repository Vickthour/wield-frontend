import { variantProps, VariantPropsOf } from "classname-variants/react";
import React, { FC, ComponentPropsWithoutRef, ElementType } from "react";

interface iconProps {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const tw = String.raw;
const buttonClasses = variantProps({
  base: tw`inline-flex items-center  focus:outline-none transition ease-in-out duration-300 active:scale-95 `,
  variants: {
    size: {
      xs: tw`px-1 py-0.5 text-xs`,
      sm: tw`px-2 py-1 text-sm`,
      md: "px-4 py-2",
      lg: "px-8 py-3 text-lg",
      full: "w-full justify-center  py-2",
    },
    color: {
      primary: "bg-primaryColor text-white",
      pink: "bg-[#FF685B0F] text-black",
      gray: tw`bg-gray-200 text-gray-700`,
      lightgray: tw`bg-[#F8F8F8] text-black`,
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
    fontWeight: {
      normal: tw`font-normal`,
      medium: tw`font-medium`,
      semibold: tw`font-semibold`,
      bold: tw`font-bold`,
    },
    gap: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3",
      xl: "gap-4",
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
    {
      variants: { shape: "rounded", size: "xs" },
      className: tw`rounded-[5px]`,
    },
  ],

  defaultVariants: {
    size: "md",
    color: "primary",
    shape: "pill",
    shadow: false,
    fontWeight: "normal",
    gap: "sm",
  },
});
type ButtonBaseProps = VariantPropsOf<typeof buttonClasses> & iconProps;

interface ButtonExtProps<C extends React.ElementType> extends ButtonBaseProps {
  as?: C;
  children?: React.ReactNode;
}

type ButtonProps<C extends React.ElementType> = ButtonExtProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonExtProps<C>>;

const Button = <C extends React.ElementType = "button">({
  children,
  as,
  icon,
  iconPosition,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "button";
  return (
    <Component {...buttonClasses(props)}>
      {iconPosition === "left" ? icon : null}
      {children}
      {iconPosition === "right" ? icon : null}
    </Component>
  );
};

export default Button;
