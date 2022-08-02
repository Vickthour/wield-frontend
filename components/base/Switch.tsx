import { useState } from "react";
import { Switch as BaseSwitch } from "@headlessui/react";

export default function Switch({label,checked,onChange}:{label:string,checked:boolean,onChange:(a:boolean)=>void}) {


  return (

      <BaseSwitch
        checked={checked}
        onChange={onChange}
        className={`${checked ? "bg-[#FFC4BF]" : "bg-[#C4C4C4]"}
          relative inline-flex h-[34px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">{label}</span>
        <span
          aria-hidden="true"
          className={`${
            checked ? "translate-x-6 bg-primaryColor" : "translate-x-0 bg-white"
          }
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </BaseSwitch>

  );
}
