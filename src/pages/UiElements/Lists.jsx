import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import ListStyle1 from '../../components/Lists/ListStyle1'

const Lists = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Lists"} />
        <div className="flex flex-col gap-7">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 class="font-medium text-black">
                Style 1
              </h3>
            </div>
            <div class="p-4 sm:p-6 xl:p-9">
              <ListStyle1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists
