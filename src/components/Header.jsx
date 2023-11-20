import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import RingLoader from "react-spinners/RingLoader";


import TableData from "./TableData";
const Header = ({ data }) => {
  const [countryName, setCountryName] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const unique = new Set();
  useEffect(() => {
    const filterData = data.filter(
      (item) =>
        item.country &&
        item.country.trim() !== "" &&
        !unique.has(item.country) &&
        unique.add(item.country)
    );
    setCountryName(filterData);
  }, [data]);
  const handleSelect = (e) => {
    setSelectedCountry(e.target.value);
  };

  const filterSelectedCountry = countryName.find(
    (item) => item.country === selectedCountry
  );
  console.log(countryName);
  return (
    <div className="m-4 md:m-6 lg:m-8 p-2">
      <div className="border h-10 flex justify-between items-center p-2 bg-yellow-200 rounded">
        <select onChange={handleSelect} className="border bg-yellow-100">
          <option>Select Country</option>
          {countryName.slice(0, 10).map((item) => (
            <option value={item.country} key={item._id}>
              {item.country}
            </option>
          ))}
        </select>
        <h1 className="font-semibold">Dashboard for Energy Sector</h1>
      </div>

      {filterSelectedCountry && (
        <div className="flex justify-center mt-2 font-bold text-lg">
          <p className="text-3xl">TOPIC:{filterSelectedCountry.topic.toUpperCase()}</p>
        </div>
      )}

      {filterSelectedCountry ? (
        <div className="shadow mt-4 p-2 font-semibold">
          <div className="flex flex-row flex-wrap gap-3 justify-between">
            <div className="">
              <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded">
                Intensity:
                <p className="font-bold">{filterSelectedCountry.intensity}</p>
              </div>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded">
              Topic:
              <p className="font-bold">{filterSelectedCountry.topic.charAt(0).toUpperCase() + filterSelectedCountry.topic.slice(1)}</p>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded">
              Relevance:
              <p className="font-bold">{filterSelectedCountry.relevance}</p>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded">
              Likelihood:
              <p className="font-bold">{filterSelectedCountry.likelihood}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center mt-4 font-bold text-lg">
          <div className="flex justify-center mt-2 font-bold text-lg">
            <p>Select The Country</p>
          </div>

          <div className=" shadow  flex-wrap flex flex-row gap-3 justify-between mt-4 p-2 ">
            <div className="">
              <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
                Intensity
                <p className="animate-bounce text-red-500">...</p>
              </div>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
              Topic
              <p  className="animate-bounce text-red-500">...</p>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
              Relevance
              <p  className="animate-bounce text-red-500">...</p>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
              Likelihood
              <p  className="animate-bounce text-red-500">...</p>
            </div>
          </div>
        </div>
      )}





      <div className="flex flex-col justify-between items-center md:flex-row ">
        <div className="mt-4">
          <h1 className="font-bold">Max Intensities of diffent Topics</h1>
          <BarChart data={countryName} className=""/>
        </div>
        <div className="mt-6">
          <h1 className="font-bold">PIE-CHART</h1>
          {filterSelectedCountry && Object.keys(data).length > 0 ? (
            <PieChart data={filterSelectedCountry} />
          ) : (
            <div
              className="flex
             flex-col  items-center h-full"
            >
              <h1 className="font-semibold animate-pulse">Please select Country from Dropdown...</h1>
              <RingLoader
                size={150}
                color="#36d7b7"
                className="mt-5"
              />
            </div>
          )}
        </div>
      </div>

      <TableData data={countryName}/>

    </div>
  );
};

export default Header;
