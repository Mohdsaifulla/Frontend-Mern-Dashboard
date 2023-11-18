import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

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
          <p>TOPIC:{filterSelectedCountry.topic.toUpperCase()}</p>
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
              <p className="font-bold">{filterSelectedCountry.topic}</p>
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
                <p>...</p>
              </div>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
              Topic
              <p>...</p>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
              Relevance
              <p>...</p>
            </div>
            <div className="border-2 border-yellow-300 flex flex-col justify-center items-center p-2 rounded font-semibold">
              Likelihood
              <p>...</p>
            </div>
          </div>
        </div>
      )}
      <div>
      <div>
        <h1>Max Intensities of diffent Topics</h1>
      <BarChart data={countryName} />
      </div>
      <div>
        <h1>Pie-Chart</h1>
        <PieChart data={filterSelectedCountry}/>
      </div>
      </div>
    </div>
  );
};

export default Header;
