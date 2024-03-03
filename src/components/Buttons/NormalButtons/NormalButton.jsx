import React from 'react'
import cn from '../../../utils/cn'

const NormalButton = ({className}) => {
  return (
    <a href="#" className={cn("inline-flex items-center justify-center bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10", className)}>
    Button
  </a>
  )
}

export default NormalButton
