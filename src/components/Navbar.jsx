import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import SideNab from "./SideNab";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleHamburger = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="border border-[#777] m-4 md:m-6 lg:m-8 rounded flex justify-between text-2xl ">
        <div className="flex gap-2 p-2">
          <div onClick={handleHamburger}>
            <FaBars className="cursor-pointer hover:text-purple-400 duration-300" />
          </div>
          <div>
            <BsSearch className="cursor-pointer" />
          </div>
          <div>
            <p className="text-sm">Search</p>
          </div>
        </div>
        <div className="flex gap-2 p-2">
          <div>
            <CiDark className="cursor-pointer" />
          </div>
          <div>
            <CgProfile className="cursor-pointer" />
          </div>
        </div>
      </div>
      <SideNab isOpen={isOpen} handleHamburger={handleHamburger}/>
    </>
  );
};

export default Navbar;
