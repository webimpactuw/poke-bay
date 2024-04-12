import sushi from "../images/sushi.png"
import "./home.css"
import entrance from "../images/entrance.png"

const Home = () => {
  return (
    <div className="background">
        <div className="flex justify-center py-5">
          <div className="flex space-x-10 text-9xl font-black ">
            <p className="text-red-500">P</p>
            <img className="w-32 h-32" src={sushi}></img>
            <p className="text-green-700">K</p>
            <p className="text-cyan-600">E</p>
            <p className="text-sky-600">B</p>
            <p className="text-violet-500">A</p>
            <p className="text-red-600">Y</p>
          </div>
        <div className="flex flex-col align-center text-center"> 
          <p className="text-primary text-xl">Fresh Poke in the U-District</p>
          <button className="bg-primary text-slate-50 w-50 button">View Menu</button>
        </div>
      </div>
      <div className="bg-primary text-white flex flex-row justify-around p-10">
        <img className="entrance" src={entrance}></img>
        <div className="flex py-5 flex-col">
          <h1 className="font-oswald text-3xl">Our Mission</h1>
          <p>We like building amazing all-inclusive poke.</p>
        </div>
      </div>

      
      <div className="py-5 text-center">
        <h1>Featured Bowls</h1>
        <div className="flex flex-row justify-around">
          <p>Bowl 1</p>
          <p>Bowl 2</p>
          <p>Bowl 3</p>
        </div>
        <button className="button text-white bg-primary">View Menu</button>
      </div>
      <div className="flex flex-row md:flex-col text-primary justify-around md:justify-none">
        <div>
          <h1 className="text-xl">View Us</h1>
          <p>Poke Bay</p>
          <p>4215 University Way NE, Seattle, WA 98105</p>
          <p>Open every day from 11 AM to 9 PM</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.317730479997!2d-122.31600312358195!3d47.658823684369665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901595ef185da9%3A0x10610fc1d56cf1f3!2sPoke%20Bay!5e0!3m2!1sen!2sus!4v1712895811651!5m2!1sen!2sus" className="w-60 h-45 border-none" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Home