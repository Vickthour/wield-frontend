import React, { FC, ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
}
const IconButton: FC<IconButtonProps> = ({ icon, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`grid h-14 w-14 origin-center place-items-center rounded-full active:scale-95  ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
