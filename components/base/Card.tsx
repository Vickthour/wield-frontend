import { variantProps, VariantPropsOf } from 'classname-variants/react'
import React, { FC } from 'react'

const tw= String.raw
const CardClassNames=variantProps({
    base:tw`bg-white rounded-[10px]`,
    variants:{
        shadow:{
            true:tw`shadow-md`
        },
        px:{
            none:'px-0',
            sm:tw`px-3`,
            md:tw`px-5`,
            lg:tw`px-6`,
            xl:tw`px-10`
        },
        py:{
            none:tw`py-0`,
            sm:tw`py-2`,
            md:tw`py-3`,
            lg:tw`py-5`,
            xl:tw`py-10`,
        },
    },
    defaultVariants:{
        px:'md',
        py:'md'
    }
})
type cardProps = JSX.IntrinsicElements["div"] &
  VariantPropsOf<typeof CardClassNames>

const Card:FC<cardProps> = ({className,children,...props}) => {
    const {className:variantClasses,...otherProps}=CardClassNames(props)
  return (
    <div className={`${className} ${variantClasses}`} {...otherProps}>
        {children}
    </div>
  )
}

export default Card