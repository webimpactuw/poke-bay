import hero from '../images/hero-img.png';
import img1 from '../images/about-img-1.png';
import img2 from '../images/about-img-2.png';

function About() {
  return (
    <>
      <section className='flex justify-center items-center flex-col gap-12 text-primary'>
        <h1 className=' text-5xl md:m-15 font-oswald font-semibold'>About</h1>
        <img src={hero} alt='' className='w-5/6' />
      </section>

      <section className='flex flex-col gap-16 py-16 items-center text-primary m-auto'>
        <article className='flex flex-col gap-8 md:flex-row items-center justify-between w-5/6 md:gap-20'>
          <div className='flex flex-col gap-4 md:max-w-md'>
            <h2 className='text-3xl flex flex-col gap-1 font-oswald font-semibold'>
              <span className='text-sm font-light uppercase'>About Us</span>
              Our Restaurant
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <img
            src={img1}
            alt=''
            className='w-screen md:w-3/6 aspect-[3/2] object-cover'
          />
        </article>
        <article className='flex flex-col gap-8 md:flex-row items-center justify-between w-5/6 md:gap-20'>
          <div className='flex flex-col gap-4 md:max-w-md'>
            <h2 className='text-3xl flex flex-col gap-1 font-oswald font-semibold'>
              <span className='text-sm font-light uppercase'>
                Meet The Owner
              </span>
              Owner Name
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <img
            src={img2}
            alt=''
            className='w-screen md:w-3/6 aspect-[3/2] object-cover object-top'
          />
        </article>
      </section>
    </>
  );
}

export default About;
