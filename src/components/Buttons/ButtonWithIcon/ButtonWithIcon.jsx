import React from 'react'
import cn from '../../../utils/cn'

const ButtonWithIcon = ({ icon, className }) => {
    return (
        <a href="#" class={cn("inline-flex items-center justify-center gap-2.5 bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10", className)}>
            <span>
                {icon}
            </span>
            Button With Icon
        </a>
    )
}

export default ButtonWithIcon
