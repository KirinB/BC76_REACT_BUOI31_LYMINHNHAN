import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleMenu() {
    setToggle(!toggle);
  }

  return (
    <header className="bg-[#212529] py-4 text-white">
      <div className="container flex justify-between items-center lg:px-12 px-3">
        <a href="#" className="text-xl">
          Start Bootstrap
        </a>
        <ul className="space-x-2 hidden lg:flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#ffffff8c] p-2 hover:text-[#ffffffbf] transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#ffffff8c] p-2 hover:text-[#ffffffbf] transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="lg:hidden border border-gray-600 py-3 px-4 rounded">
          <FaBars onClick={handleMenu} className="cursor-pointer" />
        </div>
      </div>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } lg:hidden bg-[#212529] px-4 pt-4 transition-all duration-300`}
      >
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block text-white p-2 hover:text-[#ffffffbf] transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-[#ffffff8c] p-2 hover:text-[#ffffffbf] transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-[#ffffff8c] p-2 hover:text-[#ffffffbf] transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
