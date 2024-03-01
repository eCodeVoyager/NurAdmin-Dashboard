import React from 'react'
import { Helmet } from 'react-helmet'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import ChartFour from '../components/Charts/ChartFour'

const Charts = () => {
  return (
    <>
      <Helmet>
        <title>NurAdmin | Charts</title>
      </Helmet>

      <div className='container_fluid'>
        <div className="mx-auto max-w-242.5">
          <BredCrumb pageName={"Charts"} />
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7">
          {/* Chart Four Start  */}
          <div className="col-span-12">
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-md md:px-7">
              <div>
                <h3 class="text-xl font-bold text-black">
                  Visitors Analytics
                  <ChartFour/>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Charts
