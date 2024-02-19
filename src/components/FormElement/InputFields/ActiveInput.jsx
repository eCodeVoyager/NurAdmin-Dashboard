import React from 'react'

const ActiveInput = () => {
  return (
    <>
      <label class="mb-3 block text-sm font-medium text-black">
                        Active Input
                    </label>
                    <input type="text" placeholder="Active Input" class="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" /> 
    </>
  )
}

export default ActiveInput
