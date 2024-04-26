import './home.css';
import entrance from '../images/entrance.jpg';
import { Link } from 'react-router-dom';
import bowl1 from '../images/bowl-big-kahuna.png';
import bowl2 from '../images/bowl-rainbow.png';
import bowl3 from '../images/bowl-salmon-style.png';
import logo from '../images/logo.png';

const Home = () => {
  const arrayData = [
    {
      name: 'Big Kahuna Bowl',
      image: bowl1,
      desc: 'classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds',
    },
    {
      name: 'Rainbow Bowl',
      image: bowl2,
      desc: 'classic tuna, classic salmon, crab salad, cucumber, carrots, lettuce, pickled ginger, masago, mango, green onion, citrus ponzu, spicy mayo, furikake',
    },
    {
      name: 'Salmon Style Bowl',
      image: bowl3,
      desc: 'classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds',
    },
  ];
  return (
    <div className='flex flex-row'>
      <div>
        <div className='flex flex-col justify-center pt-[5%]'>
          <div className='flex space-x-6 flex-row justify-center items-center text-[12vw] font-black font-inter'>
            <p className='text-orange-600'>P</p>
            <img className='w-[12vw] h-[12vw]' src={logo}></img>
            <p className='text-green-700'>K</p>
            <p className='text-cyan-600 pr-10'>E</p>
            <p className='text-sky-600'>B</p>
            <p className='text-violet-500'>A</p>
            <p className='text-red-600'>Y</p>
          </div>
          <div className='flex flex-col align-center justify-center text-center'>
            <div className='text-primary text-xl'>
              Fresh Poke in the U-District
            </div>
          </div>
        </div>

        <div className='home-background'>
          <div className='text-center text-white pt-[20%] w-5/6 m-auto flex flex-col items-center gap-16'>
            <h1 className='font-oswald font-semibold text-5xl pt-5'>
              Featured Bowls
            </h1>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-between'>
              {arrayData.map((item) => (
                <div key={item.name} className='md:w-[30%] w-1/2'>
                  <img className='' src={item.image}></img>
                  <div className='font-oswald md:font-inter pt-[5%] text-xl'>
                    {item.name}
                  </div>
                  <div className='font-oswald md:font-inter font-light pt-[5%] text-md'>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
            <div className='py-3 px-6 w-fit rounded-full text-primary bg-white'>
              <Link to='/menu'>View Full Menu</Link>
            </div>
          </div>

          <div className='w-5/6 m-auto pt-[400px] pb-24'>
            <div className=' text-primary flex flex-row max-md:flex-col justify-between'>
              <img className='md:w-2/5' src={entrance}></img>
              <div className='flex flex-col gap-6 md:w-2/5'>
                <h1 className='text-3xl font-semibold'>Our Mission</h1>
                <p className='font-lato'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='py-3 px-6 w-fit rounded-full bg-primary text-white'>
                  <Link to='/about'>View More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-5/6 m-auto'>
          <div className='flex max-md:flex-col flex-row text-primary justify-between items-center'>
            <div className='flex flex-col md:w-1/2'>
              <h1 className='text-2xl font-semibold'>Visit Us</h1>
              <p className='pt-2'>Poke Bay</p>
              <p>4215 University Way NE</p>
              <p>Seattle, WA 98105</p>
              <p className='py-5'>Open every day from 11 AM to 9 PM</p>
            </div>
            <iframe
              className='md:w-2/5 border-none aspect-[3/2]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.317730479997!2d-122.31600312358195!3d47.658823684369665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901595ef185da9%3A0x10610fc1d56cf1f3!2sPoke%20Bay!5e0!3m2!1sen!2sus!4v1712895811651!5m2!1sen!2sus'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
