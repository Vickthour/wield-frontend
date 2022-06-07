import { Listbox, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Control, useController } from "react-hook-form";

interface options{
    id:string;
    name:string
}
interface ListBoxProps {
  label: string;
  options: options[];
  className?: string;
control: Control<any>;

formName:string;
}
export default function ListBox({ label, options,className,control,formName }: ListBoxProps) {
    const {
        field: { value, onChange }
      } = useController({name:formName,rules:{required:`${label} is required`},control},);
    return (
    <Listbox value={value} onChange={onChange} as="div" className={`relative block  text-left ${className? className :''} font-roboto`}>
        <Listbox.Button type="button" className={`flex relative w-full justify-between items-center rounded-md bg-white  px-4 py-5  text-gray-400 hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75   `}>
          
          {value?<h3 className="absolute top-0 text-gray-700 text-sm">{label}</h3>:''}
          {value?value:label}
          <ChevronDown />
        </Listbox.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100 "
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="absolute right-0 max-h-60 z-10 overflow-y-scroll mt-2 w-full origin-top divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option, index) => (
            <div className="px-1 py-1 " key={index}>
              <Listbox.Option  key={index} id={option.id} value={option.name}>
                {({ active }) => (
                  <button
                  type="button"
                    className={`${
                      active ? "bg-gray-300 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {option.name}
                  </button>
                )}
              </Listbox.Option>
            </div>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4141 0.859375H0.585973C0.201208 0.859375 -0.0136361 1.26563 0.224645 1.54297L6.63871 8.98047C6.8223 9.19336 7.17582 9.19336 7.36136 8.98047L13.7754 1.54297C14.0137 1.26563 13.7989 0.859375 13.4141 0.859375Z"
        fill="#2A2A2A"
      />
    </svg>
  );
}
