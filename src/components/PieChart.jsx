import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  console.log(data);
  const chartData = [
    { name: "Intensity", value: data.intensity },
    { name: "Relevance", value: data.relevance },
    { name: "Likelihood", value: data.likelihood },
  ];
  const chartRef = useRef();

  useEffect(() => {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3
      .scaleOrdinal()
      .domain(chartData.map((d) => d.name))
      .range(
        d3.quantize(
          (t) => d3.interpolateSpectral(t * 0.1 + 0.9),
          chartData.length
        )
      );

    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    const arcs = pie(chartData);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius - 1);

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    svg
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", (d) => color(d.data.name))
      .attr("d", arc)
      .append("title")
      .text((d) => `${d.data.name}: ${d.data.value}`);
    svg
      .selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text((d) => `${d.data.name}: ${d.data.value}`)
      .style("fill", "white")
      .style("font-size", "11px");
  }, [chartData]);
  // < className="flex justify-center flex-col items-center  border p-2 ">
  return (
  <>
      <div className="border p-2 rounded">
        {[data].map((item) => (
          <div className="font-semibold flex-col justify-between gap-10 items-center">
            <h1>COUNTRY:{item.country}</h1>
            <hr/>
            <h1>
              TOPIC:
              {item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}
            </h1>
          </div>
        ))}
      </div>
      <svg ref={chartRef} className="pt-2"/>
      </>
  );
};

export default PieChart;
