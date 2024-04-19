import "./home.css"
import entrance from "../images/entrance.jpg"
import { Link } from "react-router-dom"
import bowl1 from "../images/bowl-big-kahuna.png"
import bowl2 from "../images/bowl-rainbow.png"
import bowl3 from "../images/bowl-salmon-style.png"
import Navbar from "../Navbar"
import logo from '../images/logo.png'

const Home = () => {
  const arrayData = [{ name: "Big Kahuna", image: bowl1, desc: 'classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds' },
  { name: "Rainbow", image: bowl2, desc: 'classic tuna, classic salmon, crab salad, cucumber, carrots, lettuce, pickled ginger, masago, mango, green onion, citrus ponzu, spicy mayo, furikake' },
  { name: "Salmon Style", image: bowl3, desc: 'classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds' }];
  return (
    <div className="flex flex-row">
        <Navbar/>
        <div>

          <div className="flex flex-col justify-center pt-[15%]">
            <div className="flex  space-x-6 flex-row justify-center items-center text-[10vw] pl-[2.5%] font-black">
                  <p className="text-red-500">P</p>
                  <img className="w-[10vw] h-[10vw]" src={logo}></img>
                  <p className="text-green-700">K</p>
                  <p className="text-cyan-600 pr-10">E</p>
                
                  <p className="text-sky-600">B</p>
                  <p className="text-violet-500">A</p>
                  <p className="text-red-600">Y</p>
            </div>
            <div className="flex flex-col align-center justify-center text-center pb-10">
              <div className="text-primary text-xl">Fresh Poke in the U-District</div>
            </div>
        </div>
        <div className="bg-primary text-white flex flex-row justify-around p-10">
          <img className="w-1/3" src={entrance}></img>
          <div className="flex py-5 flex-col w-1/2 h-full">
            <h1 className="font-oswald text-3xl ">Our Mission</h1>
            <p>We like building amazing all-inclusive poke. I hate this garblfs djlkfjjkdjkflsjfkl sjkldjf klsjkfjklsdjklfo. </p>
          </div>
        </div>


        <div className="py-5 text-center">
          <h1>Featured Bowls</h1>
          <div className="flex flex-row justify-around">
            {arrayData.map(item => (
              <div key={item.name} className="w-1/6">
                <img src={item.image}></img>
                <div>{item.name}</div>
                <div>{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="button text-white bg-primary"><Link to="/menu">View Menu</Link></div>
        </div>
        <div className="flex flex-row md:flex-col text-primary justify-across md:justify-none">
          <div className="">
            <h1 className="text-xl">View Us</h1>
            <p>Poke Bay</p>
            <p>4215 University Way NE, Seattle, WA 98105</p>
            <p>Open every day from 11 AM to 9 PM</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.317730479997!2d-122.31600312358195!3d47.658823684369665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901595ef185da9%3A0x10610fc1d56cf1f3!2sPoke%20Bay!5e0!3m2!1sen!2sus!4v1712895811651!5m2!1sen!2sus" className="w-60 h-45 border-none" loading="lazy"></iframe>
        </div>

      </div>
      </div>
    )
}

export default Home;
