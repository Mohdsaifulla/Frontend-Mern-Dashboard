import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexMediaRatio({data}) {
  const [intense, setItense] = useState([]);
  useEffect(() => {
    setItense(data.slice(0, 1));
  }, [data]);
  // console.log(intense);
  const series = [67];
  const options = {
    chart: {
      height: 200,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 60,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            offsetY: 0,

            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["RELEVANCE"],
  };

  return (
    <div id="chart">
      {intense.map((item,index) => (
        <div key={index}>
        <ReactApexChart
          options={options}
          series={[[((item.relevance)/10)*100]]}
          type="radialBar"
          height={200}
          width={250}
        />
        </div>
      ))}
    </div>
  );
}
