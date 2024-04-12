function About() {
  return (
    <>
      <section className='flex justify-center items-center p-10 flex-col'>
        <h1 className=' text-5xl m-5 md:m-10'>About</h1>
        <img src="/src/images/hero-img.png" className='w-screen'/>
      </section>

      <section className='flex flex-col justify-center items-center'>
        <article className='flex flex-col md:flex-row w-5/6 mx-20 my-5'>
          <div className='flex flex-col md:pr-10 min-w-64 py-5'>
          <h2 className="text-3xl flex flex-col py-5"><span className=" text-sm py-5">About Us</span> Our Restaurant</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga saepe eligendi nobis? Odio necessitatibus id deleniti exercitationem qui quaerat sapiente incidunt neque vitae vero, quia, fugit, quo optio obcaecati!</p>
          </div>
          <img src="/src/images/about-img-1.png" className='w-screen md:w-3/6'/>
        </article>
        <article className='flex flex-col md:flex-row w-5/6 m-20'>
          <div className='flex flex-col md:pr-10 min-w-64 py-5'>
          <h2 className="text-3xl flex flex-col py-5"><span className=" text-sm py-5">Meet The Owner</span> Owner Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci voluptas neque nesciunt, ipsam, rerum reprehenderit dignissimos iure, beatae aliquam alias amet? Consectetur at distinctio cumque, nam magnam error aut!</p>
          </div>
          <img src="/src/images/about-img-2.png" className='w-screen md:w-3/6'/>
        </article>
      </section>
    </>
  )
}

export default About