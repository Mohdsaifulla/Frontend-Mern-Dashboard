import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexRadial({data}) {
    const[intense,setItense]=useState([])
 useEffect(()=>{
setItense(data.slice(0,1))
 },[data])

    const [options] = useState({
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "60%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Percent"],
    });

    return (
      <div id="card">
        {intense.map((item,index)=>(
            <div id="chart" className="" key={index}>
          <ReactApexChart
            options={options}
            series={[((item.intensity)/10)*100]}
            type="radialBar"
            height={200} 
            width={250}
            className=""
          />
        </div>
        ))}
        
      </div>
    );
  };



