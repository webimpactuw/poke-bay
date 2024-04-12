const Menu = () => {
  return (
    <div>
      <p className="font-oswald font-semibold text-primary text-2xl text-center py-6">Menu</p>
      <div className="text-center py-4 bg-primary">
        <div className="text-white flex flex-col">
          <p className="font-oswald py-1 text-lg font-semibold">Build Your Own Bowl</p>
          <p className="text-xs font-light max-w-96 flex place-self-center mx-1">DISCLAIMER: the build-your-own-bowl section is NOT FOR ORDERING, but simply a simulation of what your bowl could look like.</p>
        </div>
        <div className="bg-white">
        
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
