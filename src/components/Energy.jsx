import React from "react";
import fetchData from "../data/fetchData";
import { useState, useEffect } from "react";
import Header from "./Header";
import HashLoader from "react-spinners/HashLoader";

const Energy = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsyncData = async () => {
      const result = await fetchData();

      setData(result);
      setLoading(false);
    };
    fetchAsyncData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[80vh]">
        <HashLoader
          color="#36d7b7"
          className="flex items-center justify-center h-screen m-auto"
        />
        <p1>Please wait for a while this loading is due to Activating IP address in Mongo-Atlas it will be worth waiting...</p1>
        </div>
      ) : (
        <Header data={data} />
      )}
    </div>
  );
};

export default Energy;
