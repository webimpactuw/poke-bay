import exterior from '../images/exterior.jpg';
import interior from '../images/interior.jpg';

function About() {
  return (
    <>
      <section className='pt-8 md:pt-14 flex justify-center items-center flex-col gap-8 text-primary'>
        <h1 className='font-league font-semibold text-5xl md:text-7xl'>
          About
        </h1>
        <img
          src={exterior}
          alt=''
          className='w-5/6 aspect-video object-cover'
        />
      </section>

      <section className='py-12 md:py-16 mx-auto text-primary flex flex-col gap-8 md:flex-row items-center justify-between w-5/6 md:gap-20'>
        <div className='flex flex-col gap-4 md:max-w-md'>
          <h2 className='font-league font-semibold text-3xl md:text-5xl'>
            Our Restaurant
          </h2>
          <p>
            Poke Bay is dedicated to promoting a healthier lifestyle through our
            delicious dishes. We pride ourselves on sourcing the freshest
            ingredients available to create an array of vibrant poke bowls. Our
            commitment to quality extends to our sashimi-grade salmon and tuna,
            which are cut fresh daily. We offer a diverse selection of over 15
            choices of protein and over 20 choices of sides. At Poke Bay,
            freshness, taste, and health are always on the menu.
          </p>
        </div>
        <img
          src={interior}
          alt=''
          className='w-screen md:w-3/6 aspect-[3/2] object-cover'
        />
      </section>
    </>
  );
}

export default About;
