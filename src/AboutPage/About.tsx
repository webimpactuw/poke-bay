import React from 'react'

function About() {
  return (
    <body>
      <section className='flex justify-center items-center h-screen w-screen flex-col'>
        <h1 className=' text-5xl m-10'>About</h1>
        <img src="/src/images/hero-img.png" className='w-5/6 h 3/6'></img>
      </section>

      <section className='flex flex-col justify-center items-center'>
        <article className='flex flex-row w-5/6 m-20'>
          <div className='flex flex-col align-left '>
            <h2 className='text-sm'>About us</h2>
            <h3 className='text-3xl'>Our Restaurant</h3>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga saepe eligendi nobis? Odio necessitatibus id deleniti exercitationem qui quaerat sapiente incidunt neque vitae vero, quia, fugit, quo optio obcaecati!</p>
          </div>
          <img src="/src/images/IMG_1053.png" className='w-3/6'></img>
        </article>
        <article className='flex flex-row w-5/6 '>
          <div>
            <h2 className='text-sm'>Meet The Owner</h2>
            <h3 className='text-3xl'>Owner Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci voluptas neque nesciunt, ipsam, rerum reprehenderit dignissimos iure, beatae aliquam alias amet? Consectetur at distinctio cumque, nam magnam error aut!</p>
          </div>
          <img src="/src/images/IMG_1054.png" className='w-3/6'></img>
        </article>
      </section>

      <footer className=' bottom-5 h-50 flex flex-col'>
      <svg></svg>
        <div className='flex '>
          <div>
            <h3>Poke Bay</h3>
            <p>4215 University Way NE Seattle, WA 98105 (626) 715-8907 pokebay.info@gmail.com</p>
          </div>
          <div className='flex'>
            <svg></svg>
            <svg></svg>
            <p></p>
          </div>
          </div>
      </footer>
    </body>
  )
}

export default About