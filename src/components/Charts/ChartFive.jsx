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
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </div>
    )
}

export default ChartFive
