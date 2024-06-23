import { useState } from "react";
// import { Box } from '@mui/material'
// import { makeStyles, useTheme } from '@mui/styles'
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const CircularChart = () => {
  //   const classes = useStyles()
  //   const theme: any = useTheme()
  const [series, setSeries] = useState([4000, 3000, 10549, 6445]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
        // bor
      },
      foreColor: "white",
    },
    stroke: {
      show: false,
      width: 2,
    },
    colors: ["#6BDAFF", "#906BFF", "#FFDA6B", "#6B90FF"],
    plotOptions: {
      pie: {
        donut: {
            size: "90%",
          labels: {
            show: true,
            total: {
              show: true,
              color: "white",
            },
            name: {
              show: true,
              color: "#DFE3E8",
              fontSize: "10px",
            },
            value: {
              show: true,
              fontSize: "30px",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    grid: {
      padding: {
        top: 10,
      },
    },
    fill: {
      type: "color",
      //   colors: [theme.palette.primary.main],
      //   gradient: {
      //     shade: 'light',
      //     shadeIntensity: 0.4,
      //     inverseColors: false,
      //     opacityFrom: 1,
      //     opacityTo: 1,
      //     stops: [0, 50, 53, 91],
      //   },
    },
    labels: ["lorem", "lorem", "lorem", "lorem"],
    legend: { show: false },
  });
  return (
    <div className={"h-[100%] w-[100%] flex justify-center items-center mt-3"}>
      <div className={""}>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height="240px"
        />
      </div>
    </div>
  );
};

export default CircularChart;
