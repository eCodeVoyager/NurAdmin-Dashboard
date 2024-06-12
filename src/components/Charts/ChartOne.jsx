import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import MealService from "../../services/MealService";

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
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
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [],
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
        fontSize: "10px",
      },
    },
    min: 0,
    max: 100,
  },
};

for (let i = 1; i <= 31; i++) {
  options.xaxis.categories.push(`${i} Jun`);
}

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Meals",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44],
      },
    ],
  });

  useEffect(() => {
    MealService.getAllMeals()
      .then((response) => {
        console.log(response);
        let mealByDay = [];
        const meals = response.map((meal) => meal.consumption.meals);
        let totalMeals = meals.reduce((a, b) => a + b, 0);
        mealByDay.push(totalMeals);
        setState({
          series: [
            {
              name: "Meals",
              data: mealByDay,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3 md:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 md:gap-5">
          <div className="flex min-w-48">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium text-secondary">
                12.04.2022 - 12.05.2022
              </p>
            </div>
          </div>
          <div className="flex min-w-48">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Sales</p>
              <p className="text-sm font-medium text-secondary">
                12.04.2022 - 12.05.2022
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-gray-100 p-1.5">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-md">
              Day
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-md ">
              Week
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-md ">
              Month
            </button>
          </div>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={state.series}
        type="area"
        height={335}
      />
    </>
  );
};

export default ChartOne;
