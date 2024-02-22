import React from 'react'
import cn from '../../utils/cn'

const NormalButtonGroup = ({ buttonOneClass, buttonTwoClass, buttonThreeClass, buttonOneText, buttonTwoText, buttonThreeText, firstIcon, secondIcon, thirdIcon }) => {
    return (
        <div class="flex items-center">
            <a href="#" class={cn("inline-flex border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white sm:px-6 sm:py-3 items-center gap-2", buttonOneClass)}>{firstIcon}{buttonOneText}</a>
            <a href="#" class={cn("inline-flex border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white  sm:px-6 sm:py-3 items-center gap-2", buttonTwoClass)}>{secondIcon}{buttonTwoText}</a>
            <a href="#" class={cn("inline-flex border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark sm:px-6 sm:py-3 items-center gap-2", buttonThreeClass)}>{thirdIcon}{buttonThreeText}</a>
        </div>
    )
}

export default NormalButtonGroup
