import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Community",
      link: "/events",
      
    },
    {
      name: "Chapters",
      link: "/chapter",
    },
  ];

  return (
    <>
      <nav className="w-full h-auto bg-transparent lg:px-24 md:px-16 sm:px-14 px-4 py-2 ">
        <div className="justify-between ml-4 mx-auto lg:w-full md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between mr-28 py-2 md:py-5 md:block">
              <Link to="/home" className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 md:h-10" />
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}+
                </button>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none  lg:flex md:flex sm:block block gap-x-2 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <div className="relative inline-block">
                      <span className="text-white mx-2 text-[1.15rem] font-medium tracking-wider hover:text-Yellow ease-out duration-700 cursor-pointer">
                        {item.name}
                      </span>
                      <ul className={`absolute bg-black text-white pt-2 pb-1 px-2 rounded-md ${navbar ? 'block' : 'hidden'}`}>
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.link}
                              className="block py-1 hover:text-gray-200"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-white mx-2 text-xl font-medium tracking-wider hover:text-Blue ease-out duration-700"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <button className="bg-Yellow text-[1.1rem] font-semibold text-black px-4 py-1.5 hover:bg-y  ease-out duration-1000 rounded lg:ml-10 md:ml-6 sm:ml-0 ml-0">
              Register
            </button>
            <button className="bg-transparent text-[1.1rem] hover:bg-Blue text-white ease-out duration-1000 font-normal px-4 py-1.5 rounded border-2 border-Blue lg:ml-10 md:ml-6 sm:ml-0 ml-0">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;