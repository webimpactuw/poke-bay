import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className='pt-28'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Root;
