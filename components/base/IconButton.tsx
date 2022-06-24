import { variantProps, VariantPropsOf } from "classname-variants/react";
import React, { FC, HTMLAttributes, ReactNode, useState } from "react";
import { EmailIcon } from "../icons";

const tw = String.raw;

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

const IconClassNames = variantProps({
  base: "grid origin-center place-items-center rounded-full active:scale-95",
  variants: {
    size: {
      xs: "h-7 w-7",
      sm: "h-9 w-9",
      md: " h-12 w-12",
      lg: "h-14 w-14",
    },
    shadow: {
      true: "shadow-md",
    },
    color: {
      primary: tw`bg-primaryColor`,
      pink: tw`bg-[#FF685B0F]`,
      white: tw`bg-white hover:bg-gray-50 active:bg-gray-100`,
      gray: tw`bg-gray-100`,
      custom: "",
    },
    border: {
      white: tw`border border-white`,
      none: "border-none",
    },
  },
  defaultVariants: {
    size: "lg",
    shadow: false,
    border: "none",
    color: "custom",
  },
});
type IconButtonExtProps = JSX.IntrinsicElements["button"] &
  VariantPropsOf<typeof IconClassNames> &
  IconButtonProps;
const IconButton = ({ icon, onClick, ...props }: IconButtonExtProps) => {
  return (
    <button onClick={onClick} type="button" {...IconClassNames(props)}>
      {icon}
    </button>
  );
};
type IcontextProps = JSX.IntrinsicElements["button"] & {
  text: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
};
const IconText = ({
  icon,
  activeIcon,
  text,
  onClick,
  ...otherProps
}: IcontextProps) => {
  const [clicked, setClicked] = useState(false);
  if (activeIcon) {
    return (
      <button
        className="flex h-full flex-col items-center justify-between"
        onClick={() => {
          setClicked(!clicked);
          onClick;
        }}
        {...otherProps}
      >
        {clicked ? activeIcon : icon}
        <h1 className="text-sm">{text}</h1>
      </button>
    );
  }
  return (
    <button
      className="flex flex-col items-center"
      onClick={onClick}
      {...otherProps}
    >
      {icon}
      <h1 className="text-sm">{text}</h1>
    </button>
  );
};
IconButton.text = IconText;
export default IconButton;
