import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import SpinnerStyle1 from '../../components/Spinners/SpinnerStyle1'
import SpinnerStyle2 from '../../components/Spinners/SpinnerStyle2'
import { Helmet } from 'react-helmet'

const Spinner = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Spinners</title>
      </Helmet>
      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Spinners"} />


          <div className="flex flex-col gap-7">
            {/* spinner style one  */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
              <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
                <h3 className="font-medium text-black">
                  Style 1
                </h3>
              </div>

              <div className="p-4 sm:p-6 xl:p-9">
                <SpinnerStyle1 />
              </div>
            </div>


            {/* spinner style one  */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
              <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-9">
                <h3 className="font-medium text-black">
                  Style 2
                </h3>
              </div>

              <div className="p-4 sm:p-6 xl:p-9">
                <SpinnerStyle2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Spinner
