import React from "react";
import fetchData from "../data/fetchData";
import { useState, useEffect } from "react";
import EnergyGraph from "./EnergyGraph";

const Energy = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const fetchAsyncData = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchAsyncData();
  }, []);
  const unique = new Set();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);
  console.log(data);
  return (
    <div className="flex flex-col justify-between items-center m-4 md:m-6 lg:m-8 p-2">
      <div className=" border shadow h-48 md:h-60 rounded  flex justify-between items-center w-[50%]   bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900">
        {data.slice(currentIndex, currentIndex + 1).map((item) => {
          if (!unique.has(item.title)) {
            unique.add(item.title);
            return (
              <div className="text-sm md:text-lg text-justify p-2 flex justify-center items-center gap-4 w-full h-full duration-300 font-semibold text-white">
                <p className="">{item.title}</p>
              </div>
            );
          }
        })}
         <div>
        <img
          src="https://ouch-cdn2.icons8.com/4Orzdcp6ZjlWWabOlheziyQmXLmXBnDjuJUi3mUsO9Q/rs:fit:368:362/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjEy/LzJhNTI0NmE3LWQy/MTQtNGMwYy1iYTU0/LTEwNWJlNTJiZTli/Ni5wbmc.png"
          className="animate-bounce h-32 w-32"
        />
      </div>
      </div>
     
      <div>
      <EnergyGraph/>
      </div>
    </div>
  );
};

export default Energy;
