import React from 'react'

const ActiveTextAria = () => {
  return (
    <>
       <label class="mb-3 block text-sm font-medium text-black">
          Active textarea
        </label>
        <textarea rows="6" placeholder="Active textarea" class="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"></textarea>
    </>
  )
}

export default ActiveTextAria
