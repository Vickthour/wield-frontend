import { variantProps, VariantPropsOf } from "classname-variants/react";
import React, { FC } from "react";
import Image from "next/image";

const tw = String.raw;
interface AvatarProps {
  src: string;
  alt?: string;
}
const AvatarBaseClasses = variantProps({
  base: tw`rounded-full relative overflow-hidden`,
  variants: {
    size: {
      sm: tw`h-8 w-8`,
      md: tw`h-12 w-12`,
      lg: tw`h-16 w-16`,
    },
    border: {
      primary: tw`border-2 bg-[#FF685B] border-[#FF685B]`,
      white: "border-2 border-white",
      none: tw`border-none`,
    },
    shape: {
      circle: tw`rounded-full`,
      square: tw`rounded-xl`,
    },
  },
  defaultVariants: {
    size: "md",
    border: "primary",
    shape: "circle",
  },
  compoundVariants: [
    {
      variants: { size: "sm", shape: "square" },
      className: "rounded-lg",
    },
    {
      variants: { size: "lg", shape: "square" },
      className: "rounded-2xl",
    },
  ],
});
type AvatarExtProps = JSX.IntrinsicElements["div"] &
  VariantPropsOf<typeof AvatarBaseClasses> &
  AvatarProps;
const Avatar = ({ src, alt, ...props }: AvatarExtProps) => {
  return (
    <div {...AvatarBaseClasses(props)}>
      <Image
        src={src}
        className="max-w-full"
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

const StoryClassNames = variantProps({
  base: "inline-flex rounded-full p-0.5",
  variants: {
    size: {
      sm: "h-12 w-12",
      md: "h-16 w-16",
      lg: "h-24 w-24",
    },
    state: {
      viewed: "bg-gray-300",
      notviewed: tw` bg-gradient-to-t from-[#ff685b] to-[#f4900c] `,
    },
  },
  defaultVariants: {
    size: "md",
    state: "notviewed",
  },
});
type storyProps = JSX.IntrinsicElements["div"] &
  VariantPropsOf<typeof StoryClassNames> &
  AvatarProps;
const Story = ({ src, alt, ...props }: storyProps) => {
  return (
    <div {...StoryClassNames(props)}>
      <div className="relative w-full overflow-hidden  rounded-full border-2 border-white">
        <Image
          src={src}
          className="max-w-full"
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
const GroupClassNames = variantProps({
  base: "inline-flex",
  variants: {
    animated: {
      true: "hover:space-x-0",
    },
    space: {
      sm: "-space-x-1",
      md: "-space-x-3",
      lg: "-space-x-5",
    },
  },
  defaultVariants: {
    animated: false,
    space: "lg",
  },
});
interface GroupProps {
  size?: "sm" | "md" | "lg";
  border?: "primary" | "white" | "none";
  images: AvatarProps[];
}

type GroupExtProps = JSX.IntrinsicElements["div"] &
  VariantPropsOf<typeof GroupClassNames> &
  GroupProps;
const Group = ({ images, size, border, ...props }: GroupExtProps) => {
  return (
    <div {...GroupClassNames(props)}>
      {images.map((image, index) => (
        <Avatar
          src={image.src}
          key={index}
          alt={image.alt}
          border={border}
          size={size}
          className="transition-[margin] duration-500 ease-in-out"
        />
      ))}
    </div>
  );
};
Avatar.Story = Story;
Avatar.Group = Group;
export default Avatar;
