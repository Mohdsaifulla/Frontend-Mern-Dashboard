import { useEffect, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  // ScaleBand,
  scaleBand,
  // ScaleLinear,
  scaleLinear,
  select,
} from "d3";

const localData = [
  { topic: "Apples", intensity: 100 },
  { topic: "Bananas", intensity: 200 },
  { topic: "Oranges", intensity: 50 },
  { topic: "Kiwis", intensity: 150 },
];

function AxisBottom({ scale, transform }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}

function Bars({ data, localData, height, scaleX, scaleY }) {
  console.log(data);
  return (
    <>
      {(data ? data : localData).slice(0,10).map((item) => (
        <rect
          key={`bar-${item._id}`}
          x={scaleX((item.topic))}
          y={scaleY(item.intensity)}
          width={scaleX.bandwidth()}
          height={height - scaleY(item.intensity)}
          fill="teal"
        />
      ))}
    </>
  );
}

export function BarChart({ data, localData }) {
  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const scaleX = scaleBand()
  .domain((data ? data : localData).slice(0,10).map((label) => label.topic.split(' ').slice(0, 5).join(' ')))
  .range([0, width])
  .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(( value ) => value.intensity))])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
}
export default BarChart;
