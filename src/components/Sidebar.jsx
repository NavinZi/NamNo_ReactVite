import React, { useState } from "react";
import logo from "../assets/img/heart-logo.png";
import profileLogo from "../assets/img/cat-meme-profile.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoPlanetOutline, IoFastFoodOutline } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GiHollowCat } from "react-icons/gi";
import { MdPeopleOutline } from "react-icons/md";
import { AiOutlineHome } from 'react-icons/ai'

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", icon: <AiOutlineHome /> },
    { title: "NamNo", icon: <MdPeopleOutline /> },
    { title: "TRAVEL", icon: <IoPlanetOutline /> },
    { title: "FOOD", icon: <IoFastFoodOutline /> },
    { title: "SOM", icon: <GiHollowCat /> },
  ];

  return (
    <div className="sticky h-screen top-0">
      <div
        className={`${
          open ? "w-72" : "w-24"
        } h-screen bg-namno-blue relative duration-300 p-5 pt-8`}
      >
        <IoIosArrowDroprightCircle
          className={`absolute bg-white rounded-full text-namno-blue text-3xl -right-4 top-11 cursor-pointer ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex gap-x-4 items-center">
          <img src={logo} width={"54px"} />
          <h1
            className={`text-namno-font origin-left font-light text-2xl duration-100 ${
              !open && "scale-0"
            }`}
          >
            Nam&No
          </h1>
        </div>

        <ul className="pt-[4rem]">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="flex text-lg items-center gap-x-4 cursor-pointer p-2 mt-6 hover:bg-light-white rounded-lg duration-500 "
            >
              <span className="text-4xl text-namno-light-orange relative group">
                {menu.icon}
                <div
                  className={`hidden group-hover:block absolute text-sm left-7 bg-gray-700 text-white rounded px-2 py-1 whitespace-nowrap ${
                    open && "scale-0"
                  }`}
                >
                  {menu.title}
                </div>
              </span>
              <span
                className={`text-base text-namno-font flex-1 duration-100 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
          
        </ul>
        <div
            className={`fixed top-[55rem] flex bg-namno-dark-blue rounded-lg items-center px-4 duration-300 ${
              !open && "pl-0 bg-transparent"
            }`}
          >
            <img src={profileLogo} className="w-[50px] h-[45px] rounded-full" />
            <div
              className={`flex flex-col px-5 py-1 text-namno-font ${
                !open && "hidden"
              }`}
            >
              <h4 className="font-semibold">Navin Chamgun</h4>
              <p className="mt-1 flex-1 font-light text-sm text-slate-500">
                navinsbp@gmail.com
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
