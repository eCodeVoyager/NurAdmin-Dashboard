import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import PaginationStyle1 from '../../components/Pagination/PaginationStyle1'
import PaginationStyle2 from '../../components/Pagination/PaginationStyle2'
import PaginationStyle3 from '../../components/Pagination/PaginationStyle3'

const Pagination = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Pagination"} />


        <div className="flex flex-col gap-7">
          {/* pagination style one  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7.5">
              <h3 className="font-medium text-black">
                Pagination Style 1
              </h3>
            </div>

            <div className="p-4 sm:p-6 xl:p-7">
              <PaginationStyle1 />
            </div>
          </div>

          {/* pagination style two  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7.5">
              <h3 className="font-medium text-black">
                Pagination Style 2
              </h3>
            </div>

            <div className="p-4 sm:p-6 xl:p-7">
              <PaginationStyle2 />
            </div>
          </div>

          {/* pagination style three  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7.5">
              <h3 className="font-medium text-black ">
                Pagination Style 3
              </h3>
            </div>

            <div className="p-4 sm:p-6 xl:p-7">
              <PaginationStyle3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
