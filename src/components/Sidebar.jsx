import React, { useState } from "react";
import logo from "../assets/img/heart-logo.png";
import profileLogo from "../assets/img/cat-meme-profile.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoPlanetOutline, IoFastFoodOutline } from "react-icons/io5";
import { GiHollowCat } from "react-icons/gi";
import { MdPeopleOutline } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "NamNo", icon: <MdPeopleOutline /> },
    { title: "TRAVEL", icon: <IoPlanetOutline /> },
    { title: "FOOD", icon: <IoFastFoodOutline /> },
    { title: "SOM", icon: <GiHollowCat /> },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-24"
        } h-screen bg-namno-blue relative duration-300 p-5 pt-8 rounded-r-lg`}
      >
        <FaArrowCircleRight
          className={`absolute bg-white rounded-full text-namno-blue text-4xl border-2 -right-4 top-9 ${
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
          <li className="pt-[430px]"></li>
          <li
            className={`flex bg-namno-dark-blue rounded-lg items-center pl-3 ${
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
          </li>
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Pages</h1>
      </div>
    </div>
  );
};

export default Sidebar;
