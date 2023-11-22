import React, { useState, useEffect } from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ApexRadial from "../charts/ApexRadial";
import ApexMediaRatio from "../charts/ApexMediaRatio";
import { FaFlagUsa } from "react-icons/fa";
import { FcAutomatic } from "react-icons/fc";
const Content = ({ data }) => {
  const [manuf, setManuf] = useState([]);
  useEffect(() => {
    const filterEnv = data.filter(
      (item) =>
        item.sector &&
        item.country &&
        item.sector.trim() !== "" &&
        item.country.trim() !== "" &&
        item.sector === "Manufacturing"
    );
    setManuf(filterEnv);
  }, [data]);
  // console.log(manuf);

  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">Manufacturing</h1>

      {manuf.slice(0,1).map((item,index)=>(
 <div key={index} className="flex lg:flex-row flex-col justify-around  gap-4 mt-4  items-center">
 <div className="grid grid-cols-2  gap-4 m-2 p-2 items-center justify-between">
   <div className="border shadow-md  md:max-w-xl lg:w-44 md:w-72 h-40 rounded-md flex justify-between items-center">
     <div className="flex flex-col justify-between gap-20 p-2">
       <p1 className="text-sm underline">TOPIC</p1>
       <p1 className="text-lg font-semibold">Production</p1>
     </div>
     <div className="p-2 text-2xl flex flex-col justify-between gap-20">
     <MdOutlineProductionQuantityLimits className=" text-purple-600"/>
     <FaArrowAltCircleUp className="text-green-600"/>
     </div>
   </div>
   <div className="border shadow-md  lg:w-44 md:w-72 h-40 rounded flex justify-between">
   <div className="flex flex-col justify-between gap-10 p-2">
       <p1 className="text-sm underline">COUNTRY</p1>
       <p1 className="text-lg font-semibold">USA</p1>
     </div>
     <div className="p-2 text-2xl flex flex-col justify-between">
     <FaFlagUsa className=" text-purple-600"/>
     <FcAutomatic className="text-green-600"/>
     </div>
   </div>
   <div className="border shadow-md  lg:w-44 md:w-72 h-40 rounded flex justify-between">
   <div className="flex flex-col justify-between p-2">
       <p1 className="text-sm underline">INSIGHT</p1>
       <p1 className="text-sm pb-2 text-justify">{item.insight}</p1>
     </div>
     
   </div>
   <div className="border shadow-md lg:w-44 md:w-72 h-40 rounded flex justify-between">
   <div className="flex flex-col justify-between p-2">
       <p1 className="text-sm underline">TITLE</p1>
       <p1 className="text-sm text-justify">{item.title}</p1>
     </div>
    
   </div>
 </div>
 <div className="md:flex md:flex-col md:items-center lgl:flex-row lg:flex-row justify-around items-center gap-5">
   <div className="border shadow-md lg:w-64 h-80 rounded p-2 flex flex-col justify-around items-center md:w-[600px]">
    <div className="font-semibold ">INTENSITY</div>
    <div>
      <ApexRadial data={manuf}/>
    </div>
   </div>
   <div className="border shadow-md lg:w-64 h-80  md:w-[600px] rounded p-2 flex flex-col justify-around items-center">
  
      <div className="font-semibold">
        RELEVANCE
      </div>
      <div>
        <ApexMediaRatio data={manuf}/>
      </div>
    
   </div>
 </div>
</div>
      ))}
     
    </div>
  );
};

export default Content;
