import React from "react";
import { useState, useEffect } from "react";
import { iconsName } from "../data/icons";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideNab = ({ isOpen, handleHamburger }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } shadow-lg bg-white absolute top-0 left-0 w-56 overflow-hidden nav-bg`}
    >
      <div className="flex justify-center items-center font-bold m-2">
        <Link
          to={"/"}
          className="flex justify-center items-center font-bold m-2 p-2 text-xl gap-2"
          onClick={handleHamburger}
        >
          <TbLayoutDashboard className="text-2xl text-purple-600" />
          <h1 className="text-purple-600">SECTOR</h1>
        </Link>
        <AiOutlineClose
          className="absolute top-1 right-4 text-3xl text-purple-600 hover:bg-purple-400 rounded-full duration-300 p-1 cursor-pointer"
          onClick={handleHamburger}
        />
      </div>
      {iconsName.map((item) => (
        <Link
          key={item.name}
          to={item.name.toLowerCase()}
          className="flex gap-2 m-2 justify-start items-center shadow p-2 hover:bg-purple-400 rounded cursor-pointer duration-300 font-semibold"
          onClick={handleHamburger}
        >
          <div className="text-lg">{item.icon}</div>
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default SideNab;
