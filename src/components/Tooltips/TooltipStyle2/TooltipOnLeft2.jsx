import React from 'react'

const TooltipOnLeft2 = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
    <div className="mb-14 text-right sm:text-left">
      <div className="group relative inline-block">
        <button className="inline-flex rounded-md bg-primary px-4 py-2 font-medium text-white">
          Tooltip on left
        </button>
        <div className="absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-4 py-1.5 text-sm font-medium opacity-0 drop-shadow-md group-hover:opacity-100">
          <span className="absolute -right-1 top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-white"></span>
          Tooltip Text
        </div>
      </div>
    </div>
  </div>
  )
}

export default TooltipOnLeft2
