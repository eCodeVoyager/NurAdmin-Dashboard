import React from 'react'

const DefaultInput = () => {
  return (
    <>
        <label class="mb-3 block text-sm font-medium text-black">
                        Default Input
                    </label>
                    <input type="text" placeholder="Default Input" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" /> 
    </>
  )
}

export default DefaultInput
