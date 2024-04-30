import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Home",
      link: "/Home",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Community",
      link: "/Community",
    },
    {
      name: "Chapters",
      link: "/chapters",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-black lg:px-24 md:px-16 sm:px-14 px-12 py-4 shadow-md">
        <div className="justify-between ml-4 mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/" className="flex items-center">
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
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none  lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-white text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <button className="bg-Yellow text-[1.1rem] font-semibold text-black px-4 py-1.5 rounded lg:ml-10 md:ml-6 sm:ml-0 ml-0">
                Register
              </button>
              <button className="bg-transparent text-[1.1rem] font-normal text-Blue px-4 py-1.5 rounded border-2 border-Blue lg:ml-10 md:ml-6 sm:ml-0 ml-0">
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
