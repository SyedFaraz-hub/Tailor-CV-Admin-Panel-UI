import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Lorem Ispsum",
      data: [48, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Lorem Ipsum",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      foreColor: "white",
      width: "auto",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#FFDA6B", "#6BDAFF"],
    },
    colors: ["#FFDA6B", "#6BDAFF"],
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      //   width: 100,
      show: true,
      position: "top",
      horizontalAlign: "right",
      itemMargin: {
        // vertical: ,
      },
      labels: {
        colors: ["#FFDA6B", "#6BDAFF"],
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3
      //   padding: {
      //     right: 30
      //   }
    },
  });
  return (
    <div className="text-white w-[100%]">
      <Chart
        options={options}
        series={series}
        type="line"
        height="100%"
        width="100%"
        className="w-[] h-[300px]"
      />
    </div>
  );
};

export default LineChart;
