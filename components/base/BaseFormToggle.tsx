import {FC} from "react";

interface toggleProps {
    label?: string;
    desc?: string;
}

const BaseFormToggle: FC<toggleProps> = ({label, desc}) => {
    return (
        <>
            <div className="hs-tooltip flex items-center">
                <input type="checkbox" id="hs-tooltip-example" className="hs-tooltip-toggle relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

  before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                <label htmlFor="hs-tooltip-example"
                       className="text-sm text-gray-500 ml-3 dark:text-gray-400">{label}</label>
                <div
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip">
                    {desc}
                </div>
            </div>
        </>
    )
}
export default BaseFormToggle