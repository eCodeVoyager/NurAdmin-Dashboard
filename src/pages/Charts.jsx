import React from 'react'
import { Helmet } from 'react-helmet'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import ChartFour from '../components/Charts/ChartFour'
import ChartFive from '../components/Charts/ChartFive'
import ChartSix from '../components/Charts/ChartSix'
import ChartSeven from '../components/Charts/ChartSeven'

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
                <h3 className="text-[22px] font-bold text-black">
                  Visitors Analytics
                  <ChartFour />
                </h3>
              </div>
            </div>
          </div>
          {/* Chart five start here  */}
          <div className="col-span-12 xl:col-span-7">
            <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-md md:px-7 xl:col-span-8'>

              <ChartFive />
            </div>
          </div>
          {/* Chart five end here  */}

          {/* Chart six start here  */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-sm border border-stroke h-full flex flex-col justify-between bg-white px-5 pb-5 pt-7 shadow-md md:px-7">
              <ChartSix />

            </div>

          </div>
          {/* Chart six end here  */}

          {/* Chart seven start here  */}
          <div className="col-span-12 lg:col-span-7">
            <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-md md:px-7 xl:col-span-8">
              <ChartSeven />

            </div>
          </div>
          {/* Chart seven End here  */}

          {/* Chart eight start here  */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-sm border border-stroke bg-white shadow-md">
            </div>
          </div>
          {/* Chart eight end here  */}
        </div>
      </div>
    </>
  )
}

export default Charts
