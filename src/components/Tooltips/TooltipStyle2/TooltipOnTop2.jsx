import React from 'react'

const TooltipOnTop2 = () => {
  return (
    <div class="w-full px-4 sm:w-1/2 xl:w-1/4">
    <div class="mb-14">
      <div class="group relative inline-block">
        <button class="inline-flex rounded-md bg-primary px-4 py-2 font-medium text-white">
          Tooltip on top
        </button>
        <div class="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md text-secondary bg-white px-4 py-1.5 text-sm font-medium opacity-0 drop-shadow-md group-hover:opacity-100 dark:bg-meta-4">
          <span class="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-l-sm bg-white"></span>
          Tooltip Text
        </div>
      </div>
    </div>
  </div>
  )
}

export default TooltipOnTop2
