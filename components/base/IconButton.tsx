import { variantProps, VariantPropsOf } from "classname-variants/react";
import React, { FC, HTMLAttributes, ReactNode } from "react";
import { EmailIcon } from "../icons";

const tw= String.raw

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

const IconClassNames = variantProps({
  base: "grid origin-center place-items-center rounded-full active:scale-95",
  variants: {
    size: {
      sm: "h-8 w-8",
      md: " h-12 w-12",
      lg: "h-14 w-14",
    },
    shadow: {
      true: "shadow-md",
    },
    color: {
      primary: tw`bg-primaryColor`,
      pink: tw`bg-[#FF685B0F]`,
      white: 'bg-white',
      custom: '',
    },
    border:{
      white:tw`border border-white`,
      none:'border-none'
    }
  },
  defaultVariants:{
    size:'lg',
    shadow:false,
    border:'none',
    color:'custom'
  }
});
type IconButtonExtProps=JSX.IntrinsicElements["button"] &
  VariantPropsOf<typeof IconClassNames> & IconButtonProps;
const IconButton: FC<IconButtonExtProps> = ({ icon, onClick,...props }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      {...IconClassNames(props)}
    >
      {icon}
    </button>
  );
};

export default IconButton;
