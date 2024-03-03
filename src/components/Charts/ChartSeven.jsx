import React, { useState } from 'react'
import { HiArrowTrendingUp } from "react-icons/hi2";
import { RiDeleteBin3Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import ReactApexChart from 'react-apexcharts';
const ChartSeven = () => {
    const [show, setShow] = useState(false)
    const [state] = useState({
        series: [
            {
                name: 'Product One',
                data: [168, 285, 131, 248, 187, 296, 191, 269, 201, 185, 230, 166],
            },

            {
                name: 'Product Two',
                data: [258, 185, 251, 198, 287, 205, 292, 199, 259, 185, 151, 130],
            },
        ],
        options: {
            chart: {
                height: 250,
                type: 'area',
                toolbar: {
                    show: false // Hide the toolbar which includes the download button
                },
                dropShadow: {
                    enabled: true,
                    color: '#623CEA14',
                    top: 20,
                    blur: 1,
                    left: 0,
                    opacity: 0.1,
                },

            },
            dataLabels: {
                enabled: false
            },
            grid: {
                strokeDashArray: 7 // Adjust this value to change the dash length
            },
            colors: ['#2ab00e', '#3C50E0'],
            stroke: {
                curve: 'smooth',
                width: 2
            },
            xaxis: {
                type: 'category',
                categories: [
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                ],
                axisBorder: {
                    show: true,
                },
                axisTicks: {
                    show: false,
                },
            },

            yaxis: {
                title: {
                    style: {
                        fontSize: '10px',
                    },
                },
                min: 100,
                max: 350,
                tickAmount: 5,
            },

            legend: {
                show: false  // Set to false to hide the legend
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: false,
                    opacityFrom: 0.6,
                    opacityTo: 0.2,
                    stops: [0, 50, 100],
                }
            }
        },
    });
    return (
        <div>
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h4 className="text-[22px] font-bold text-black ">
                        Campaign Visitors
                    </h4>
                    <div className="mt-2.5 flex gap-2">
                        <h3 className="mb-1.5 text-[28px] font-bold text-black">
                            $560.93
                        </h3>
                        <span className="flex items-center gap-1 text-md font-medium text-green-500">
                            <HiArrowTrendingUp /> +2.5%
                        </span>
                    </div>
                    <span className="mt-1 block font-medium text-secondary">Average cost per interaction</span>
                </div>
                <div className="relative">
                    <button onClick={() => setShow(!show)}>
                        <BsThreeDots className='text-lg text-secondary' />
                    </button>
                    <div className={`${show ? "block" : "hidden"} absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-md`}>
                        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray-100">
                            <FiEdit className='text-lg' />
                            Edit
                        </button>
                        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray-100">
                            <RiDeleteBin3Line className='text-lg' />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <ReactApexChart options={state.options} series={state.series} type="area" height={250} />
        </div>
    )
}

export default ChartSeven
