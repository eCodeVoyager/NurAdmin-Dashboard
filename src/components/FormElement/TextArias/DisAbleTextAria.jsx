import React from 'react'

const DisAbleTextAria = () => {
  return (
    <>
         <label class="mb-3 block text-sm font-medium text-black">
          Disabled textarea
        </label>
        <textarea rows="6" disabled placeholder="Disabled textarea" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"></textarea>
    </>
  )
}

export default DisAbleTextAria
