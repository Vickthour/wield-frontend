import { Listbox, Menu, Transition } from "@headlessui/react";
import { variantProps } from "classname-variants/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Control, useController, UseControllerProps } from "react-hook-form";

interface options {
  id: string;
  name: string;
}
type ListBoxProps<T> = {
  label: string;
  options: options[];
  className?: string;
} & UseControllerProps<T>;
 const listBoxVariants= variantProps({
  base:'',
  variants:{
    size:{
      
    }
  }
 })
export default function ListBox<T>({
  label,
  options,
  className,
  ...controlProps
}: ListBoxProps<T>) {
  const {
    field: { value, onChange },
  } = useController(controlProps);
  return (
    <Listbox
      value={value}
      onChange={onChange}
      as="div"
      className={`relative block  text-left ${
        className ? className : ""
      } font-roboto`}
    >
      <Listbox.Button
        type="button"
        className={`relative flex w-full items-center justify-between rounded-full border-2  px-4   py-5 text-gray-700  focus:border-orange-500 focus:outline-none  md:rounded-lg   `}
      >
        <>
          {value ? (
            <h3 className="absolute top-1 left-5 text-xs text-orange-500 md:left-4  md:text-sm">
              {label}
            </h3>
          ) : (
            ""
          )}
          {value ? value : label}
          <ChevronDown />
        </>
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
        <Listbox.Options className="absolute right-0 z-10 mt-2 max-h-60 w-full origin-top divide-y divide-gray-100 overflow-y-scroll rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option, index) => (
            <div className="px-1 py-1 " key={index}>
              <Listbox.Option key={index} id={option.id} value={option.name}>
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

