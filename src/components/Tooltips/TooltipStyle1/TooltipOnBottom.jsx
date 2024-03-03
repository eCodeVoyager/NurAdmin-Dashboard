import React from 'react'

const TooltipOnBottom = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
    <div className="mb-14">
      <div className="group relative inline-block">
        <button className="inline-flex rounded-md bg-primary px-4 py-2 font-medium text-white">
          Tooltip on bottom
        </button>
        <div className="absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black px-4 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
          <span className="absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
          Tooltip Text
        </div>
      </div>
    </div>
  </div>
  )
}

export default TooltipOnBottom
