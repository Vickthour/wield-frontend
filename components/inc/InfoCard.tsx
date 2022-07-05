import { motion } from "framer-motion";
import React, { ReactNode,useState } from "react";

export  const InfoCard = ({ name, icon }: { name: string; icon: ReactNode }) => {
  const [hoveredTab,setHoveredTab] = useState<boolean>(false);
  const resetHover=()=>setHoveredTab(false);
  const hoverItem=()=>setHoveredTab(true);
  return (
    <div
      onMouseOver={hoverItem}
      onMouseLeave={resetHover}
      className="relative flex items-center gap-2 rounded-lg py-3 px-1 [&>svg]:z-20"
    >
      {icon}
      <h1 className="z-20 font-medium">{name}</h1>
      {hoveredTab && (
        <motion.div
          className=" absolute inset-0 z-10 rounded-lg bg-[#ff695b20]"
          layoutId="hvbg"
        ></motion.div>
      )}
    </div>
  );
};
