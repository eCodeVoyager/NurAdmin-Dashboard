import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import ListStyle1 from '../../components/Lists/ListStyle1'
import ListStyle2 from '../../components/Lists/ListStyle2'
import ListStyle3 from '../../components/Lists/ListStyle3'

const Lists = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Lists"} />
        <div className="flex flex-col gap-7">
          {/* list Style one  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 className="font-medium text-black">
                Style 1
              </h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-9">
              <ListStyle1 />
            </div>
          </div>
          {/* list Style Two  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 className="font-medium text-black">
                Style 2
              </h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-9">
              <ListStyle2 />
            </div>
          </div>

          {/* list Style Three  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
              <h3 className="font-medium text-black">
                Style 3
              </h3>
            </div>
            <div className="p-4 sm:p-6 xl:p-9">
              <ListStyle3 />
              <ListStyle3 />
              <ListStyle3 />
              <ListStyle3 />
              <ListStyle3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists
