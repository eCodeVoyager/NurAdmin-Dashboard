import React from 'react'

const FormButton = ({name}) => {
  return (
    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 text-white">
   {name}
</button>
  )
}

export default FormButton
