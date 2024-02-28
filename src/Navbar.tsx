import logo from "./Images/poke-bay.png";

const Navbar = () => {
    return (
    <div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 
    <div className = "relative flex h-16 items-center justify-between">
        <img src={logo} alt="Poke Bay Logo" className="size-14 p-1"/>
        <ol className="flex space-x-3">
            <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><a href="/">Home</a></li>
            <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><a href="/menu">Menu</a></li>
            <li className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><a href="/about">About</a></li>
        </ol>
        </div>
    </div>
    )
  }

export default Navbar