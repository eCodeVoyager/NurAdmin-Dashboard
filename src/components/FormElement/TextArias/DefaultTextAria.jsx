import React from 'react'

const DefaultTextAria = () => {
  return (
    <>
      <label class="mb-3 block text-sm font-medium text-black">
          Default textarea
        </label>
        <textarea rows="6" placeholder="Default textarea" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"></textarea> 
    </>
  )
}

export default DefaultTextAria
