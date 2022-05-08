import React, { FC, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "./icons";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface selectItem {
  id: number;
  name: string;
  unavailable: boolean;
}
interface Props {
  datalist: selectItem[];
  selectProps: UseFormRegister<any>;
  id: string;
  validate?: object;
  errors?: FieldErrors;
}
const NetSelect: React.FC<Props> = ({
  datalist,
  selectProps,
  id,
  validate,
  errors,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(datalist[0]);

  useEffect(() => {
    const select = document.getElementById(`ghost-select-${id}`);
    if (select) {
      (select as HTMLInputElement).value = selectedValue.name;
      (select as HTMLInputElement).focus();
    }
  }, [selectedValue, setSelectedValue]);

  return (
    <>
      <select
        {...selectProps(id, { ...validate })}
        id={`ghost-select-${id}`}
        className="top 0 pointer-events-none absolute left-0 opacity-0"
      >
        {datalist.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <Listbox value={selectedValue} onChange={setSelectedValue}>
        <Listbox.Button className="flex  w-full  items-center rounded-3xl border px-2 py-2.5 focus:border-2 focus:border-slate-700">
          {selectedValue.id === 0 ? (
            <span className="flex-1 text-left text-gray-400">
              {selectedValue.name}
            </span>
          ) : (
            <span className="flex-1 text-left">{selectedValue.name}</span>
          )}
          <span>
            <ChevronDownIcon />
          </span>
        </Listbox.Button>
        <p className="text-red-500">
          {errors ? errors[id]?.message : ""}
        </p>
        <Listbox.Options className=" relative">
          <div className="absolute mt-1 w-full rounded bg-gray-200 ">
            {datalist.map((person, index) => (
              <Listbox.Option
                key={person.id}
                value={person}
                disabled={person.unavailable}
                className="relative flex  h-10 disabled:text-gray-300"
              >
                {({ active, selected }) => {
                  return (
                    <span
                      className={
                        active
                          ? " inset-y-0 left-0 flex h-full w-full rounded bg-slate-300 px-2 py-2 pl-12 "
                          : " inset-y-0 left-0 flex h-full w-full rounded px-2 py-2 pl-12 hover:bg-slate-300  "
                      }
                    >
                      {selected && index !== 0 && (
                        <CheckIcon className="-ml-6" />
                      )}
                      {person.name}
                    </span>
                  );
                }}
              </Listbox.Option>
            ))}
          </div>
        </Listbox.Options>
      </Listbox>
    </>
  );
};

export default NetSelect;
