import { NavLink, useLocation } from "react-router-dom";
import logo from "../public/img/logo.png";
import { useState, useEffect, useRef, RefObject } from "react";
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const sidebarRef: RefObject<HTMLDivElement> = useRef(null);
  const location = useLocation();

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

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="fixed w-full z-20 mt-[33px]">
      <div className="flex flex-wrap justify-between items-center mx-[6%]">
        {/* LOGO */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Poke Bay Home"
            className="w-[42px] h-[42px] sm:w-[55px] sm:h-[55px]"
          />
        </NavLink>

        {/* MOBILE MENU */}
        <div className="flex sm:hidden flex-wrap">
          <button onClick={() => setIsSideBarOpen((prev) => !prev)}>
            <LuMenu className="size-6 text-primary"></LuMenu>
          </button>
          <div
            ref={sidebarRef}
            className={`flex flex-col top-0 right-0 w-2/3 bg-primary p-10 text-white text-2xl fixed h-full ease-in-out duration-500 ${
              isSideBarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex right-0 justify-end mb-8">
              <button
                className="w-fit"
                onClick={() => setIsSideBarOpen((prev) => !prev)}
              >
                <CgClose className="size-5 m-0"></CgClose>
              </button>
            </div>
            <ul className="flex flex-col text-xl text-left gap-10">
              <li>
                <NavLink
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "underline font-bold"
                      : "font-normal"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? "underline font-bold"
                      : "font-normal"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={
                    location.pathname === "/menu"
                      ? "underline font-bold"
                      : "font-normal"
                  }
                >
                  Menu
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex">
          <ul className="flex gap-8 text-primary">
            <li>
              <NavLink
                to="/"
                className={`group ${
                  location.pathname === "/" ? "font-bold" : "font-normal"
                }`}
              >
                Home
                <span className="block bg-primary max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`group ${
                  location.pathname === "/about" ? "font-bold" : "font-normal"
                }`}
              >
                About
                <span className="block bg-primary max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={`group ${
                  location.pathname === "/menu" ? "font-bold" : "font-normal"
                }`}
              >
                Menu
                <span className="block bg-primary max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
