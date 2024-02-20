import React from 'react'

const DefaultTextAria = ({label, placeholder}) => {
  return (
    <>
      <label class="mb-3 block text-sm font-medium text-black">
     {label}
        </label>
        <textarea rows="6" placeholder={placeholder} class="w-full rounded-md border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter placeholder:text-sm placeholder:font-light"></textarea> 
    </>
  )
}

export default DefaultTextAria
