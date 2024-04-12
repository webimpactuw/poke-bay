import BaseImage from '../images/choose-bowl-base.jpeg';

const Menu = () => {
  return (
    <div>
      <p className="font-oswald font-semibold text-primary text-4xl text-center py-6">Menu</p>
      <div className="text-center py-4 bg-primary">
        <div className="text-white flex flex-col">
          <p className="font-oswald py-2 text-2xl font-semibold">Build Your Own Bowl</p>
          <p className="text-s font-light max-w-[55ch] flex place-self-center mx-4">DISCLAIMER: the build-your-own-bowl section is NOT FOR ORDERING, but simply a simulation of what your bowl could look like.</p>
        </div>
        <div className="bg-white py-4 sm:py-8 px-10 sm:px-16 mx-20 my-5 text-primary">
          <div className="space-x-2 space-y-2 sm:text-left">
            <button className="border-[1px] border-primary rounded-xl px-3">Base</button>
            <button className="border-[1px] border-primary rounded-xl px-2">Proteins</button>
            <button className="border-[1px] border-primary rounded-xl px-2">Sides</button>
            <button className="border-[1px] border-primary rounded-xl px-2">Sauce</button>
            <button className="border-[1px] border-primary rounded-xl px-2">Toppings</button>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="text-left sm:space-y-3 space-y-2 my-5 mt-16 sm:my-16 order-last sm:order-first">
              <p className="font-oswald font-semibold pb-2 text-xl">Step 1: Choose a Base</p>
              <p className="text-sm">Sushi Rice</p>
              <p className="text-sm">White Rice</p>
              <p className="text-sm">Spring Mix</p>
              <p className="text-sm">Half & Half</p>
            </div>
            <div className="sm:size-56 size-44 sm:m-10 place-self-center">
              <img src={BaseImage} className="object-cover translate-y-7 aspect-square rounded-full w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-12 my-8 text-primary">
        <div className="m-4">
          <div>Insert Photo Here</div>
          <div>Insert Photo Here</div>
          <div>Insert Photo Here</div>
        </div>
        <div className="m-4">
          <div>
            <p className="text-lg font-oswald font-bold">Our Signature Bowls</p>
            <p className="text-xs">Regular $13.99 Large $16.99</p>
          </div>
          <div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Menu
