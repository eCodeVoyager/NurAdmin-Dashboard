import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const ChartFive = () => {
    const [state] = useState({
        series: [
            {
                name: 'Product One',
                data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 76],
            },

            {
                name: 'Product Two',
                data: [15, 9, 32, 25, 68, 80, 68, 80, 94, 74, 62, 51],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false // Hide the toolbar which includes the download button
                },
                dropShadow: {
                    enabled: true,
                    color: '#623CEA14',
                    top: 5,
                    blur: 1,
                    left: 0,
                    opacity: 0.1,
                },

            },
            dataLabels: {
                enabled: false
            },
            colors: ['#3C50E0', '#babbf7'],
            stroke: {
                curve: 'smooth'
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
                min: 0,
                max: 100,
                tickAmount: 5,
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
            legend: {
                show: false  // Set to false to hide the legend
            }
        },
    });

    return (
        <>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h4 className="text-[22px] font-bold text-black">
                        Payments Overview
                    </h4>
                </div>
                <div className="flex items-center">
                    <p className="font-medium uppercase text-black">Short by:</p>
                    <div className="relative z-20 inline-block">
                        <select name="#" id="#" className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none">
                            <option value="">Monthly</option>
                            <option value="">Weekly</option>
                        </select>
                        <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z" fill="#64748B"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
            </div>
            <div className="flex flex-col text-center lg:flex-row">
                <div className="border-stroke py-2  lg:w-1/2 lg:border-r">
                    <p className="font-medium text-secondary">Received Amount</p>
                    <h4 className="mt-1 text-xl font-bold text-black">
                        $45,070.00
                    </h4>
                </div>
                <div className="py-2 lg:w-1/2">
                    <p className="font-medium text-secondary">Due Amount</p>
                    <h4 className="mt-1 text-xl font-bold text-black">
                        $32,400.00
                    </h4>
                </div>
            </div>
        </>
    )
}

export default ChartFive
