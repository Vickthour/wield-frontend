import React, { FC, ReactNode } from 'react'

interface IconButtonProps{
    icon:ReactNode;
    className?:string;
    onClick?:()=>void;
}
const IconButton:FC<IconButtonProps> = ({icon,className,onClick}) => {
  return (
    <button onClick={onClick} type='button' className={`active:scale-95 origin-center h-14 w-14 rounded-full grid place-items-center  ${className}`}>
        {icon}
    </button>
  )
}

export default IconButton