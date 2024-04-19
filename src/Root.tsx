import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className='pt-28'>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
