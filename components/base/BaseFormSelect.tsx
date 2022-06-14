import {FC} from "react";

interface selectProps {
    label: string;
    options: [];
}

const BaseFormSelect: FC<selectProps> = ({label, options}) => {

    return (
        <>
            <div>
                <label htmlFor="select-1" className="block text-sm font-medium mb-2 dark:text-white">{label}</label>
                <div className="relative">
                    <select id="select-1"
                            className="py-3 px-4 pr-16 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        <option selected>Choose one</option>
                        {options.map((option, index) => (
                                <option value={option} key={index}>{option} </option>
                            )
                        )}


                    </select>
                    {/*
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-8">
                        <svg className="h-4 w-4 text-red-500" width="16" height="16" fill="currentColor"
                             viewBox="0 0 16 16"
                             aria-hidden="true">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
*/}
                </div>
                {/*
                <p className="text-sm text-red-600 mt-2">Please select a valid state.</p>
*/}
            </div>
        </>
    )
}
export default BaseFormSelect