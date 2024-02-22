import React from 'react'
import cn from '../../utils/cn'

const NormalButtonGroup = ({buttonOneClass, buttonTwoClass, buttonThreeClass}) => {
    return (
        <div class="flex items-center">
            <a href="#" class={cn("inline-flex border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white sm:px-6 sm:py-3", buttonOneClass)}>About</a>
            <a href="#" class={cn("inline-flex border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white  sm:px-6 sm:py-3", buttonTwoClass)}>Profile</a>
            <a href="#" class={cn("inline-flex border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark sm:px-6 sm:py-3", buttonThreeClass)}>Services</a>
        </div>
    )
}

export default NormalButtonGroup
