import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import TooltipOnTop from '../../components/Tooltips/TooltipStyle1/TooltipOnTop'
import TooltipOnRight from '../../components/Tooltips/TooltipStyle1/TooltipOnRight'
import TooltipOnBottom from '../../components/Tooltips/TooltipStyle1/TooltipOnBottom'
import TooltipOnLeft from '../../components/Tooltips/TooltipStyle1/TooltipOnLeft'
import TooltipOnTop2 from '../../components/Tooltips/TooltipStyle2/TooltipOnTop2'
import TooltipOnRight2 from '../../components/Tooltips/TooltipStyle2/TooltipOnRight2'
import TooltipOnLeft2 from '../../components/Tooltips/TooltipStyle2/TooltipOnLeft2'
import TooltopOnBottom2 from '../../components/Tooltips/TooltipStyle2/TooltopOnBottom2'
import { Helmet } from 'react-helmet'

const Tooltips = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Tooltips</title>
      </Helmet>
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Tooltips"} />

        <div className="flex flex-col gap-7">
          {/* Tooltip style one  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 className="font-medium text-black">
                Tooltips Style 1
              </h3>
            </div>

            <div className="p-4 sm:p-5 xl:p-7">
              <div className="-mx-4 flex flex-wrap justify-center">
                {/* Tooltip on Top  */}
                <TooltipOnTop />

                {/* Tooltip on Right  */}
                <TooltipOnRight />

                {/* Tooltip on bottom  */}
                <TooltipOnBottom />

                {/* Tooltip on left  */}
                <TooltipOnLeft />

              </div>
            </div>
          </div>


          {/* Tooltip style one  */}
          <div className="rounded-sm border border-stroke bg-white shadow-md">
            <div className="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 className="font-medium text-black">
                Tooltips Style 1
              </h3>
            </div>

            <div className="p-4 sm:p-5 xl:p-7">
              <div className="-mx-4 flex flex-wrap justify-center">
                {/* Tooltip on Top  */}
                <TooltipOnTop2 />

                {/* Tooltip on Right  */}
                <TooltipOnRight2 />

                {/* Tooltip on bottom  */}
                <TooltopOnBottom2 />

                {/* Tooltip on left  */}
                <TooltipOnLeft2 />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tooltips
