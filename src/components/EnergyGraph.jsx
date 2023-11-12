import React from 'react'
import fetchData from "../data/fetchData";
import { useState, useEffect } from "react";
const EnergyGraph = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAsyncData = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchAsyncData();
  }, []);
//   const unique = new Set();
  const uniqueCountries = [...new Set(data.map(item => item.country))];

  return (
    <div>
      <div>
        <select>
          {uniqueCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default EnergyGraph