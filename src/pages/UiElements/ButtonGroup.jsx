import React from 'react'
import NormalButtonGroup from '../../components/ButtonGroup/NormalButtonGroup'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'

const ButtonGroup = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Buttons Group"} />
      </div>
      {/* Buttons Group */}
      <div className="flex flex-col gap-7">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7.5">
            <h3 class="font-medium text-black">
              Buttons Group
            </h3>
          </div>
          <div class="p-4 sm:p-5 xl:p-7.5">
            <div class="flex flex-col gap-6">
              <NormalButtonGroup />
              <NormalButtonGroup buttonOneClass={"rounded-s-md"} buttonThreeClass={"rounded-e-md"} />
              <NormalButtonGroup buttonThreeClass={"rounded-e-full"} buttonOneClass={"rounded-s-full"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonGroup
