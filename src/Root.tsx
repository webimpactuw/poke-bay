import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
        <Navbar></Navbar>
        <main><Outlet/></main>
    </>
  )
}

export default Root