import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import DropdownStyle1 from '../../components/Dropdowns/DropdownStyle1/DropdownStyle1'

const DropDown = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Dropdowns"} />

        <div className="flex flex-col gap-7">

          {/* Dropdown style 1  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 className="font-medium text-black">
                Dropdowns Style 1
              </h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-10">
              <DropdownStyle1 />
            </div>
          </div>

          {/* Dropdown style 2  */}

          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 className="font-medium text-black">
                Dropdowns Style 2
              </h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-10">
              <DropdownStyle1 dropBoxClass={"bg-primary"} dropItemClass={"text-white/50 hover:text-white hover:bg-transparent"} />
            </div>
          </div>

          {/* Dropdown style 3  */}

          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 className="font-medium text-black">
                Dropdowns Style 3
              </h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-10">
              <DropdownStyle1 buttonClassName={"bg-dark"} dropBoxClass={"bg-dark"} dropItemClass={"text-white/50 hover:text-white hover:bg-transparent"} />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default DropDown
