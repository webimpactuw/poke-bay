import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
        <Navbar></Navbar>
        <main><Outlet/></main>
        <Footer />
    </>
  )
}

export default Root