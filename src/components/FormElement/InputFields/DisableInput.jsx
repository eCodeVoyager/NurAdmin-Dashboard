import React from 'react'

const DisableInput = () => {
  return (
    <>
      <label class="mb-3 block text-sm font-medium text-black">
                        Disabled label
                    </label>
                    <input type="text" placeholder="Disabled label" disabled class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" /> 
    </>
  )
}

export default DisableInput
