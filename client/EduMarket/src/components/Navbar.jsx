import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { createClient } from '@supabase/supabase-js'
import { Link } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const openSidebar = () => {
    setIsopen(true);
  };

  const closeSidebar = () => {
    setIsopen(false);
  };

  const hamburger = () => {
    return <div className="h-screen w-32 bg-slate-400">hi</div>;
  };
  const { data } = supabase.storage.from('Attachments').getPublicUrl('1');
  console.log(data.publicUrl)
  const hello=()=>{
    <Link to={data.publicUrl}></Link>
  }
  return (
    <div className="shadow-md bg-black w-screen">
      <div className="flex items-start sm:justify-between justify-between  sm:p-2">
        {/* <div className="p-4 sm:hidden">
          <RxHamburgerMenu onClick={hamburger} color="black" size={28} />
        </div> */}
        <a href="/">
          <div className="logo flex sm:items-center text-2xl p-6 sm:text-3xl">
            <span className="text-white font-semibold">Edu</span>
            <span className="text-violet-500 text-white font-semibold">Market</span>
          </div>
        </a>
        {/* <div className="lg:hidden hidden xl:flex items-center">
          <AiOutlineUser color="black" size={32} />
        </div> */}
        <div className="flex items-center">
          <button onClick={hello} className="rounded-lg py-1 px-4 h-12 bg-violet-500 m-4 text-white ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
