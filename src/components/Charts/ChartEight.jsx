import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { IoIosArrowDown } from "react-icons/io";
const ChartEight = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Net Profit',
                data: [
                    390, 60, 400, 200, 150, 350, 250
                ]
            },
            {
                name: 'Net Profit',
                data: [150, 330, 220, 340, 310, 260, 295
                ]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false // Hide the toolbar which includes the download button
                }
            },
            colors: ['#3C50E0', "#6edcec"],
            grid: {
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                strokeDashArray: 7 // Adjust this value to change the dash length
            },

            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30%', // Adjust this value to control the width of each bar
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['transparent']
            },
            xaxis: {
                categories: ["M", "T", "W", "T", "F", "S", "S"],
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
                max: 400,
            },
            fill: {
                opacity: 1
            },
            legend: {
                show: false  // Set to false to hide the legend
            }

        }
    });
    return (
        <div>
            <div class="flex flex-col gap-2 border-b border-stroke px-6 py-5 md:flex-row md:justify-between">
                <div>
                    <h2 class="text-[22px] font-bold text-black">
                        Campaigns
                    </h2>
                </div>
                <div class="flex items-center">
                    <p class="font-medium uppercase text-black">Short by:</p>
                    <div class="relative z-20 inline-block">
                        <select name="#" id="#" class="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none text-secondary">
                            <option value="">Monthly</option>
                            <option value="">Weekly</option>
                        </select>
                        <span class="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
            </div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={300} />
        </div>
    )
}

export default ChartEight
