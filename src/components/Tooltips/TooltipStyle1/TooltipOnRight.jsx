import React from 'react'

const TooltipOnRight = () => {
  return (
    
    <div class="w-full px-4 sm:w-1/2 xl:w-1/4">
    <div class="mb-14">
      <div class="group relative inline-block">
        <button class="inline-flex rounded-md bg-primary px-4 py-2 font-medium text-white">
          Tooltip on right
        </button>
        <div class="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-black px-4 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
          <span class="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black"></span>
          Tooltip Text
        </div>
      </div>
    </div>
  </div>
  )
}

export default TooltipOnRight
