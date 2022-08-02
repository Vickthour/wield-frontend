import React from "react";
import { ChevronLeft } from "../icons";

function MoreOptions({
  onClick,
  name,
  icon,
}: {
  onClick?: (() => void) | ((a: any) => any);
  name?: string;
  icon?:React.ReactNode
}) {
  return (
    <div
      onClick={onClick}
      className="relative flex items-center justify-between py-4     pr-4 text-sm font-medium hover:bg-[#FF685B0F]"
    >
      {name}
      {icon||<ChevronLeft size="xs" />}
    </div>
  );
}
export default MoreOptions;
