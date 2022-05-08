import React, {FC} from 'react'
import {className} from "./NetFuseLogo";


const ChevronDownIcon: FC<className> = ({ className }) => {
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className?"h-6 w-6 "+className:"h-6 w-6"}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    )
}
export default ChevronDownIcon