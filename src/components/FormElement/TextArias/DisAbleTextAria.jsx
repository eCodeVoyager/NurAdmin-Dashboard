import React from 'react'

const DisAbleTextAria = ({label, placeholder}) => {
  return (
    <>
         <label class="mb-3 block text-sm font-medium text-black">
          {label}
        </label>
        <textarea rows="6" disabled placeholder={placeholder} class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-100"></textarea>
    </>
  )
}

export default DisAbleTextAria
