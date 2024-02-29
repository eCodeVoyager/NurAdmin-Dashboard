import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { IoIosArrowDown } from 'react-icons/io';

const options = {
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        type: 'donut',
        height: 335,
    },
    colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
    labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
    legend: {
        show: false,
        position: 'bottom',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};

const ChartThree = () => {
    const [state, setState] = useState({
        series: [65, 34, 12, 56],
    });

    return (
        <>
            <div class="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h4 class="text-xl font-bold text-black">
                        Visitors Analytics
                    </h4>
                </div>
                <div>
                    <div class="relative z-20 inline-block">
                        <select name="" id="" class="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none">
                            <option value="">Monthly</option>
                            <option value="">Yearly</option>
                        </select>
                        <span class="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
            </div>
            <div className='mb-2 flex justify-center'>
                <ReactApexChart
                    options={options}
                    series={state.series}
                    type="donut"
                />
            </div>
            <div class="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
              <div class="w-full px-8 sm:w-1/2">
                <div class="flex w-full items-center">
                  <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                  <p class="flex w-full justify-between text-sm font-medium text-black">
                    <span> Desktop </span>
                    <span> 65% </span>
                  </p>
                </div>
              </div>
              <div class="w-full px-8 sm:w-1/2">
                <div class="flex w-full items-center">
                  <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                  <p class="flex w-full justify-between text-sm font-medium text-black">
                    <span> Tablet </span>
                    <span> 34% </span>
                  </p>
                </div>
              </div>
              <div class="w-full px-8 sm:w-1/2">
                <div class="flex w-full items-center">
                  <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                  <p class="flex w-full justify-between text-sm font-medium text-black">
                    <span> Mobile </span>
                    <span> 45% </span>
                  </p>
                </div>
              </div>
              <div class="w-full px-8 sm:w-1/2">
                <div class="flex w-full items-center">
                  <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
                  <p class="flex w-full justify-between text-sm font-medium text-black">
                    <span> Unknown </span>
                    <span> 12% </span>
                  </p>
                </div>
              </div>
            </div>
        </>

    )
}

export default ChartThree
