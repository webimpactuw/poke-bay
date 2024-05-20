import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

import sanityClient from '../client.tsx';
import { loadImage } from '../lib/loadImage.ts';
import { components } from '../lib/portableText.tsx';
import logo from '../images/logo.png';

type Bowl = {
  name: string;
  description: string;
  img: string;
};

type Mission = {
  heading: string;
  body: string;
  img: string;
};

const Home = () => {
  const [featuredBowls, setFeaturedBowls] = useState<Bowl[]>([]);
  const [mission, setMission] = useState<Mission>();
  const [hours, setHours] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type=='home'][0]`;
      const { featuredBowls, mission, visit } = await sanityClient.fetch(query);
      setFeaturedBowls(featuredBowls);
      setMission(mission);
      setHours(visit.hours);
    };

    getData();
  }, []);

  return (
    <div>
      <div className='flex flex-col justify-center pt-32 md:pt-20 pb-[320px] md:pb-[280px]'>
        <div
          className='flex space-x-1 md:space-x-6 flex-row justify-center items-center text-[16vw] sm:text-[12vw] font-semibold sm:font-black font-inter'
          aria-hidden
        >
          <span className='text-orange-600'>P</span>
          <img className='w-[12vw] h-[12vw]' src={logo}></img>
          <span className='text-green-700'>K</span>
          <span className='text-cyan-600 pr-6 sm:pr-10'>E</span>
          <span className='text-sky-600'>B</span>
          <span className='text-violet-500'>A</span>
          <span className='text-red-600'>Y</span>
        </div>
        <h1 className='hidden'>Poke Bay</h1>
        <div className='flex flex-col align-center justify-center text-center'>
          <div className='text-primary text-xl md:text-3xl font-light font-league'>
            Fresh Poke in the U District
          </div>
        </div>
      </div>

      <div className='bg-primary home-bg mb-[220px] md:mb-[320px]'>
        <div className='text-center text-white w-5/6 m-auto flex flex-col items-center gap-4 md:gap-16'>
          <h2 className='font-league font-semibold text-3xl md:text-5xl pt-5'>
            Featured Bowls
          </h2>
          <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-12'>
            {featuredBowls.map((bowl, index) => (
              <div key={index} className='flex flex-col gap-2 md:w-[30%]'>
                <img
                  className='sm:w-3/4 md:w-auto m-auto'
                  src={loadImage(bowl.img)}
                  alt=''
                ></img>
                <h3 className='font-league text-xl md:text-2xl pt-2 md:pt-4 font-semibold'>
                  {bowl.name}
                </h3>
                <p className='font-light md:text-md'>{bowl.description}</p>
              </div>
            ))}
          </div>
          <Link
            to='/menu'
            className='mt-10 md:mt-0 py-3 px-6 w-fit rounded-full text-white border border-white/90 hover:bg-white/20 transition duration-300 ease-in-out'
          >
            View Full Menu
          </Link>
        </div>
      </div>

      <div className='w-5/6 m-auto pb-24'>
        <div className=' text-primary flex items-center max-md:flex-col max-md:gap-12 justify-between'>
          {mission && (
            <img className='md:w-2/5' src={loadImage(mission.img)} alt=''></img>
          )}
          <div className='flex flex-col gap-2 max-md:items-center md:w-2/5'>
            <h2 className='font-league text-3xl md:text-5xl font-semibold'>
              {mission?.heading}
            </h2>
            <p className='max-md:text-center leading-relaxed'>
              {mission?.body}
            </p>
            <Link
              to='/about'
              className='mt-4 py-3 px-6 w-fit rounded-full bg-primary text-white hover:bg-primary-dark transition duration-300 ease-in-out'
            >
              View More
            </Link>
          </div>
        </div>
      </div>
      <div className='w-5/6 m-auto max-lg:pb-12'>
        <div className='flex max-md:flex-col-reverse max-md:gap-12 text-primary justify-between items-center'>
          <div className='flex flex-col gap-2 md:w-1/2 max-md:text-center'>
            <h2 className='font-league text-3xl md:text-5xl font-semibold'>
              Visit Us
            </h2>
            <div>
              <p>Poke Bay</p>
              <p>4215 University Way NE</p>
              <p>Seattle, WA 98105</p>
            </div>
            <PortableText value={hours} components={components} />
          </div>
          <iframe
            className='w-full md:w-2/5 border-none aspect-[3/2]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.317730479997!2d-122.31600312358195!3d47.658823684369665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901595ef185da9%3A0x10610fc1d56cf1f3!2sPoke%20Bay!5e0!3m2!1sen!2sus!4v1712895811651!5m2!1sen!2sus'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
