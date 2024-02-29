import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';



const options = {
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
  
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: '25%',
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '25%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },
  
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',
  
      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };
const ChartTwo = () => {
    const [state, setState] = useState({
        series: [
          {
            name: 'Sales',
            data: [44, 55, 41, 67, 22, 43, 65],
          },
          {
            name: 'Revenue',
            data: [13, 23, 20, 8, 13, 27, 15],
          },
        ],
      });
  return (
    <div>
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
    </div>
  )
}

export default ChartTwo
