import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import Breadcrumb1 from '../../components/Breadcrumb/Style1/Breadcrumb1'
import Breadcrumb2 from '../../components/Breadcrumb/Style2/Breadcrumb2'
import Breadcrumb3 from '../../components/Breadcrumb/Style3/Breadcrumb3'
import { Helmet } from 'react-helmet'

const Breadcrumb = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Breadcrumb</title>
      </Helmet>
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Breadcrumb"} />
        <div className="flex flex-col gap-7">
          {/* Style one  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Breadcrumb Style 1
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <Breadcrumb1 />
            </div>
          </div>
          {/* Style Two  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Breadcrumb Style 1
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <Breadcrumb2 />
            </div>
          </div>
          {/* Style three  */}
          <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Breadcrumb Style 1
              </h3>
            </div>

            <div class="p-4 sm:p-6 xl:p-10">
              <Breadcrumb3 />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Breadcrumb
