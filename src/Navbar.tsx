import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./images/poke-bay.png";
import { useState } from "react";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 

        <div className = "relative flex h-16 items-center justify-between">
            <NavLink to="/" className="size-14 p-1 block"><img src={logo} alt="Poke Bay Logo"/></NavLink>
            
            <button className="block center p-1 sm:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <GiHamburgerMenu className="size-8"/>
            </button>
            <div className={`fixed z-10 right-0 top-0 h-full w-1/2 px-4 sm:hidden bg-gray-300 text-black ease-in-out duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="block center p-1 h-16" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <GiHamburgerMenu className="size-8"/>
                </button>
                <ol className="">
                    <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"><NavLink to="/">Home</NavLink></li>
                    <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"><NavLink to="/menu">Menu</NavLink></li>
                    <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"><NavLink to="/about">About</NavLink></li>          
                </ol>
            </div>

            <ol className="hidden sm:flex space-x-3">
                <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><NavLink to="/">Home</NavLink></li>
                <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><NavLink to="/menu">Menu</NavLink></li>
                <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><NavLink to="/about">About</NavLink></li>          
            </ol>
            </div>
        </div>
    )
  }

export default Navbar