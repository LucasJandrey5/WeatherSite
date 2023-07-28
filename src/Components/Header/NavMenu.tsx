import React from "react";

import { Navbar } from "flowbite-react";

const NavMenu = () => {
  return (
    <Navbar fluid rounded className=" dark:bg-gray-900">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>

        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
