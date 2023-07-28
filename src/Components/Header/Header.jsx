import React from "react";
import NavMenu from "./NavMenu.tsx";

import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <nav className="min-w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-around mx-auto md:order-1">
        <a href="#" className="flex items-center">
          <img
            src={require("../../images/logo.png")}
            className="h-24 mr-1 sm:h-20"
            alt="Site Logo"
          />
          <span className="self-center hidden sm:block text-xl font-semibold whitespace-nowrap dark:text-white">
            Weather App
          </span>
        </a>

        <DarkThemeToggle className="md:order-2" />
      </div>
    </nav>
  );
};

export default Header;
