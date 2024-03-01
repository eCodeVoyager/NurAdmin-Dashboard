import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const ChartFour = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Net Profit',
                data: [
                    390, 60, 400, 200, 150, 350, 250, 120, 390,
                    100, 50, 380, 370, 320, 180, 240, 70, 300, 190,
                    80, 110, 130, 170, 100, 330, 220, 340, 310, 260, 295
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
            colors: ['#3C50E0'],
            grid: {
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
            },

            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    borderRadius: 2 // Set the radius for rounding the corners
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
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

        }
    });

    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
    )
}

export default ChartFour
