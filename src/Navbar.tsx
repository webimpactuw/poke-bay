import { NavLink } from "react-router-dom";
import logo from "../public/img/logo.png";
import { useState, useEffect, useRef, LegacyRef } from "react";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  let sidebarRef: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsSideBarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <nav className="fixed w-full z-20 mt-[33px]">
      <div className="flex flex-wrap justify-between items-center mx-[6%]">
        {/* LOGO */}
        <NavLink to="/">
          <img src={logo} alt="poke-bay-logo" className="w-[55px] h-[55px]" />
        </NavLink>

        {/* MOBILE MENU */}
        <div className="flex sm:hidden flex-wrap">
          <button onClick={() => setIsSideBarOpen((prev) => !prev)}>
            <LuMenu className="size-9"></LuMenu>
          </button>
          <div
            ref={sidebarRef}
            className={`flex flex-col items-center top-0 right-0 w-50 bg-secondary p-10 text-white fixed h-full font-normal font-lato text-nav ease-in-out duration-500 ${
              isSideBarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="mb-10"
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
              <CgClose className="size-8"></CgClose>
            </button>
            <ul className="flex flex-col font-normal font-lato text-nav items-center justify-between min-h-[250px]">
              <li className="text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li className="text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex">
          <ul className="flex flex-row font-normal font-lato text-nav space-x-8">
            <li>
              <NavLink
                to="/"
                className="block text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="block text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
