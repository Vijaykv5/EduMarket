import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const openSidebar = () => {
    setIsopen(true);
  };
  const closeSidebar = () => {
    setIsopen(false);
  };
  const hamburger = () => {
    <div className="h-screen w-32 bg-slate-400">hi</div>;
  };
  return (
    <div className="border-slate-700 shadow-md text-white w-screen ">
      <div className="flex  ">
        <div className="p-7 sm:hidden ">
          <RxHamburgerMenu ßonClick={hamburger} color="black" size={28} />
        </div>
        <a href="/">
        <div className="logo justify-center  items-center flex font-semibold text-3xl p-6 ">
          <span className="text-black">Edu</span>
          <span className="text-violet-500">Market</span>
        </div>
        </a>
        <div className="p-7 xl:hidden ">
          <AiOutlineUser color="black" size={32} />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
