import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    // Scroll to top of screen on refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

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
