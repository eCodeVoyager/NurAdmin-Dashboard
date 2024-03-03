import React from 'react'
import { Helmet } from 'react-helmet'
import { IoIosArrowDown } from "react-icons/io";
import SummeryCard from '../components/Dashboard/SummeryCard';
import ChartOne from '../components/Charts/ChartOne';
import ChartTwo from '../components/Charts/ChartTwo';
import ChartThree from '../components/Charts/ChartThree';
import MapOne from '../components/Map/MapOne';
import TopChannels from '../components/Dashboard/TopChannels';
import ChatCard from '../components/Dashboard/ChatCard';

const DashBoard = () => {
  const summeryData = [
    {
      title: 'Total views',
      count: '3.456K',
      percentage: "0.43%",
      status: true
    },
    {
      title: 'Total Profit',
      count: '$45,2K ',
      percentage: "4.35%",
      status: true
    },
    {
      title: 'Total Product',
      count: '2.450 ',
      percentage: "2.59%",
      status: true
    },
    {
      title: 'Total Users',
      count: '3.456',
      percentage: "0.88%",
      status: false
    }
  ];


  return (
    <>
      <Helmet>
        <title>NurAdmin | Dashboard</title>
      </Helmet>
      <div className='container_fluid'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
          {/* <!-- Card Item Start --> */}
          {
            summeryData.map((item, index) => (
              <SummeryCard key={index} item={item} index={index} />
            ))
          }
          {/* <!-- Card Item End --> */}

        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
          {/* Chart one start here  */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-md sm:px-7 xl:col-span-8">
            <ChartOne />
          </div>
          {/* Chart one End here  */}
          {/* Chart two start here  */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white p-7 shadow-md xl:col-span-4">
            <div className="mb-4 justify-between gap-4 sm:flex">
              <div>
                <h4 className="text-xl font-bold text-black">
                  Profit this week
                </h4>
              </div>
              <div>
                <div className="relative z-20 inline-block">
                  <select name="#" id="#" className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none">
                    <option value="">This Week</option>
                    <option value="">Last Week</option>
                  </select>
                  <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                    <IoIosArrowDown />
                  </span>
                </div>
              </div>
            </div>
            <ChartTwo />
          </div>
          {/* Chart two End here  */}

          {/* chart thee start here  */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-md md:px-7 xl:col-span-5">
            <ChartThree />
          </div>
          {/* chart thee end here  */}

          {/* Map One Start   */}
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-7 py-6 shadow-md xl:col-span-7">
            <MapOne/>
          </div>
          {/* Map One End   */}

          {/* Top channels  table start here*/}
          <div className="col-span-12 xl:col-span-8">
            <TopChannels/>
          </div>
          {/* Top channels  table end here*/}

          {/* Chat card start here  */}
          <ChatCard/>
          {/* Chat card end here  */}
          
        </div>
      </div>
    </>
  )
}

export default DashBoard
