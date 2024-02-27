import React from 'react'

const TooltipOnTop = () => {
    return (
        <div class="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div class="mb-14">
                <div class="group relative inline-block">
                    <button class="inline-flex rounded-md bg-primary px-4 py-2 font-medium text-white">
                        Tooltip on top
                    </button>
                    <div class="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black px-4 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
                        <span class="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                        Tooltip Text
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TooltipOnTop