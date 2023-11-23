import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexMixChart = ({ datas }) => {
  console.log(datas);
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
  });
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  useEffect(() => {
    if (datas && datas.length > 0) {
      const intensityData = datas.map((item) =>
        item.intensity !== null ? item.intensity : 0
      );

      // Handle null values for relevance and likelihood fields
      const relevanceData = datas.map((item) =>
        item.relevance !== null ? item.relevance : 0
      );
      const likelihoodData = datas.map((item) =>
        item.likelihood !== null ? item.likelihood : 0
      );
      const DateData = datas.map((item) =>
      item.added !== null ? formatDate(item.added) : "N/A"
    );
      setChartData((prevChartData) => ({
        ...prevChartData,
        series: [
          { name: "INTENSITY", type: "column", data: intensityData },
          { name: "RELEVANCE", type: "area", data: relevanceData },
          { name: "LIKELIHOOD", type: "line", data: likelihoodData },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: "smooth",
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100],
            },
          },
          labels:DateData,
      
          markers: {
            size: 0,
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            title: {
              text: "Points",
            },
            min: 0,
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;
              },
            },
          },
        },
      }));
    }
  }, [datas]);

  return (
    <div id="chart">
     { [chartData].map((item)=>(
      <div>
        <ReactApexChart
          options={item.options}
          series={item.series}
          type="line"
          height={350}
        />
      </div>
      ))}
    </div>
  );
};

export default ApexMixChart;
