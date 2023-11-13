import React, { useEffect, useState } from "react";

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
  console.log(countryName);
  const handleSelect = (e) => {
    setSelectedCountry(e.target.value);
  };

  const filterSelectedCountry = countryName.find(
    (item) => item.country === selectedCountry
  );
  return (
    <div className="m-4 md:m-6 lg:m-8 p-2">
        <div className="border h-10 flex justify-between items-center p-2">
      <select onChange={handleSelect} className="border">
        <option>Select Country</option>
        {countryName.slice(0, 10).map((item) => (
          <option value={item.country} key={item._id}>
            {item.country}
          </option>
        ))}
      </select>
      <h1>Dashboard for Country</h1>
      </div>
      <div>
        intensity
        {filterSelectedCountry && (
          <div className="">
            <div className="flex
            "> <span>Intensisty:</span>
            <div>{filterSelectedCountry.intensity}</div></div>
            <div>Topic: {filterSelectedCountry.topic}</div>
            <div>Relevance:{filterSelectedCountry.relevance}</div>
            <div>Likelihood:{filterSelectedCountry.likelihood}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
