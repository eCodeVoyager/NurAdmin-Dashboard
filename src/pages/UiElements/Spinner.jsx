import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import SpinnerStyle1 from '../../components/Spinners/SpinnerStyle1'

const Spinner = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Spinners"} />


        <div className="flex flex-col gap-7">
          <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 class="font-medium text-black">
                Style 1
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-9">
            <SpinnerStyle1/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
