import React, { useState, useEffect } from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";


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
  console.log(manuf);

  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">Manufacturing</h1>

      {manuf.slice(0,1).map((item)=>(
 <div className="md:grid md:grid-cols-2 gap-4 mt-4 grid grid-rows-2 items-center justify-center">
 <div className="grid grid-cols-2 gap-4 m-2 p-4 border justify-center items-center w-full">
   <div className="bg-red-200 md:max-w-xl w-44 h-28 rounded flex justify-between">
     <div className="flex flex-col justify-between gap-10 p-2">
       <p1 className="text-sm">TOPIC</p1>
       <p1 className="text-lg font-semibold">Production</p1>
     </div>
     <div className="p-2 text-2xl flex flex-col justify-between">
     <MdOutlineProductionQuantityLimits className=" text-purple-600"/>
     <FaArrowAltCircleUp className="text-green-600"/>
     </div>
   </div>
   <div className="bg-green-200 md:max-w-lg w-36 h-28 rounded flex justify-between">
   <div className="flex flex-col justify-between gap-10 p-2">
       <p1 className="text-sm">TOPIC</p1>
       <p1 className="text-lg font-semibold">Production</p1>
     </div>
     <div className="p-2 text-2xl flex flex-col justify-between">
     <MdOutlineProductionQuantityLimits className=" text-purple-600"/>
     <FaArrowAltCircleUp className="text-green-600"/>
     </div>
   </div>
   <div className="bg-blue-200 md:max-w-lg w-36 h-28 rounded flex justify-between">
   <div className="flex flex-col justify-between gap-10 p-2">
       <p1 className="text-sm">TOPIC</p1>
       <p1 className="text-lg font-semibold">Production</p1>
     </div>
     <div className="p-2 text-2xl flex flex-col justify-between">
     <MdOutlineProductionQuantityLimits className=" text-purple-600"/>
     <FaArrowAltCircleUp className="text-green-600"/>
     </div>
   </div>
   <div className="bg-yellow-200 md:max-w-lg w-36 h-28 rounded flex justify-between">
   <div className="flex flex-col justify-between gap-10 p-2">
       <p1 className="text-sm">TOPIC</p1>
       <p1 className="text-lg font-semibold">Production</p1>
     </div>
     <div className="p-2 text-2xl flex flex-col justify-between">
     <MdOutlineProductionQuantityLimits className=" text-purple-600"/>
     <FaArrowAltCircleUp className="text-green-600"/>
     </div>
   </div>
 </div>
 <div className="grid grid-cols-2 gap-4 p-2 border w-full">
   <div className="bg-red-200 max-w-lg h-56 rounded"></div>
   <div className="bg-yellow-200 max-w-lg h-56 rounded"></div>
 </div>
</div>
      ))}
     
    </div>
  );
};

export default Content;
