import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const data = [
  { name: "intensity", value: 30 },
  { name: "Category 2", value: 35 },
  // { name: "Category 3", value: 20 },
  { name: "Category 4", value: 10 },
  // Add more data as needed
];

const PieChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.name))
      .range(
        d3.quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
      );

    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    const arcs = pie(data);

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
    }
  }, []);

  return <svg ref={chartRef} />;
};

export default PieChart;
