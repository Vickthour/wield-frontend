import React,{FC} from "react";

export interface className {
    className?: string;
  }
export  const NetFuseLogo: FC<className> = ({ className }) => {
    
  
    return (
      <div
        className={
          className
            ? `mx-auto flex gap-1 items-center ${className}`
            : `mx-auto flex gap-1 items-center `
        }
      >
        <div className="rounded-full font-semibold bg-red-400 grid place-items-center text-3xl text-white w-10 h-10">
          N
        </div>
        <h1 className="text-3xl font-semibold text-red-400">Netfuse</h1>
      </div>
    );
  };
  