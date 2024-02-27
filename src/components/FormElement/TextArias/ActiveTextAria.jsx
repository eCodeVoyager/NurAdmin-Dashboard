import React from 'react'

const ActiveTextAria = ({label, placeholder}) => {
  return (
    <>
       <label className="mb-3 block text-sm font-medium text-black">
         {label}
        </label>
        <textarea rows="6" placeholder={placeholder} className="w-full rounded-md border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter placeholder:text-sm placeholder:font-light"></textarea>
    </>
  )
}

export default ActiveTextAria
