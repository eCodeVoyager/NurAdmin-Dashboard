import React from 'react'
import { Helmet } from 'react-helmet'
import BredCrumb from '../components/shared/Buredcrumb/BredCrumb'
import ChartFour from '../components/Charts/ChartFour'
import ChartFive from '../components/Charts/ChartFive'

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
                  <ChartFour />
                </h3>
              </div>
            </div>
          </div>
          {/* Chart five start here  */}
          <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-md md:px-7 xl:col-span-8'>
            <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 class="text-title-sm2 font-bold text-black">
                  Payments Overview
                </h4>
              </div>
              <div class="flex items-center">
                <p class="font-medium uppercase text-black">Short by:</p>
                <div class="relative z-20 inline-block">
                  <select name="#" id="#" class="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none">
                    <option value="">Monthly</option>
                    <option value="">Weekly</option>
                  </select>
                  <span class="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z" fill="#64748B"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <ChartFive />
            <div class="flex flex-col text-center lg:flex-row">
              <div class="border-stroke py-2  lg:w-1/2 lg:border-r">
                <p class="font-medium text-secondary">Received Amount</p>
                <h4 class="mt-1 text-xl font-bold text-black">
                  $45,070.00
                </h4>
              </div>
              <div class="py-2 lg:w-1/2">
                <p class="font-medium text-secondary">Due Amount</p>
                <h4 class="mt-1 text-xl font-bold text-black">
                  $32,400.00
                </h4>
              </div>
            </div>
          </div>
          {/* Chart five end here  */}
        </div>
      </div>
    </>
  )
}

export default Charts
