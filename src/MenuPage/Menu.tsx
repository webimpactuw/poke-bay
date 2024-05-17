import { useState } from 'react';

import Step from './Step';

import BuildImage from '../images/menu-build.jpeg';
import MenuImg1 from '../images/menu-bowl-1.jpeg';
import MenuImg2 from '../images/menu-bowl-2.jpeg';
import MenuImg3 from '../images/menu-bowl-3.jpeg';
import MenuImg4 from '../images/menu-bowl-4.jpeg';

function Menu() {
  const [selected, setSelected] = useState('Base');

  const categories = [
    {
      name: 'Base',
      header: 'Step 1: Choose a Base',
      ingredients: ['Sushi Rice', 'White Rice', 'Spring Mix', 'Half & Half'],
    },
    {
      name: 'Proteins',
      header: 'Step 2: Choose a Protein',
      ingredients: [
        'Classic Salmon',
        'Hawaiian Salmon',
        'Spicy Salmon',
        'Seared Ahi Tuna',
        'Tempura',
        'Crawfish',
        'Scallop',
        'Octopus',
        'Shrimp',
        'Sukiyaki',
        'Grilled Chicken',
        'Spam',
        'Unagi ($2)',
        'Organic Tofu',
      ],
    },
    {
      name: 'Sides',
      header: 'Step 3: Choose a Side (subject to charges)',
      ingredients: [
        'Miso Soup',
        'Spam Musubi',
        'Pork Gyoza (6pc)',
        'Chicken Karage (8oz)',
        'Tempura Shrimp (3pc)',
        'Seaweed Salad',
        'Squid Salad',
        'Hawaiian Mac Salad',
        'Edamame',
      ],
    },
    {
      name: 'Sauce',
      header: 'Step 4: Choose a Sauce ($1 for extra)',
      ingredients: [
        'Spicy Mayo',
        'Eel Sauce',
        'Shoyu',
        'Sriracha Hot Chili',
        'Sweet Chili',
        'Teriyaki Sauce',
        'Zesty Mango',
        'Citrus Ponzu',
        'Gluten-Free Shoyu',
        'Japanese Dressing',
      ],
    },
    {
      name: 'Toppings',
      header: 'Step 5: Choose a Topping (unlimited)',
      ingredients: [
        'Crispy Onion',
        'Crispy Garlic',
        'Wonton Strips',
        'Crunchy Tempura',
        'Furikake',
        'Sesame Seeds',
      ],
    },
  ];

  // TODO: update bowl descriptions
  const bowls = [
    {
      name: 'Salmon Style Bowl',
      description:
        'classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds',
    },
    {
      name: 'Tuna Lover Bowl',
      description:
        'classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion',
    },
    {
      name: 'Rainbow Bowl',
      description:
        'classic tuna, classic salmon, crab salad, cucumber, carrots, lettuce, pickled ginger, masago, mango, green onion, citrus ponzu, spicy mayo, furikake',
    },
    {
      name: 'Big Kahuna Bowl',
      description:
        'hawaiian salmon, hawaiian tuna, crab salad, cucumber, carrots, edamame, sweet onion, mango, sweet corn, seaweed salad, japanese dressing, crispy onion',
    },
    {
      name: 'Volcano Bowl',
      description:
        'spicy salmon, spicy tuna, spicy crab salad, cucumber, jalapenos, cherry tomato, sweet onion, carrots, pickled ginger, spicy mayo, sriracha, crispy onion',
    },
    {
      name: 'Veggie Bowl',
      description:
        'organic tofu, cucumber, sweet onion, sweet corn, carrots, lettuce, red cabbage, edamame, cherry tomato, seaweed salad, citrus ponzu, furikake',
    },
    {
      name: 'Tempura Shrimp Bowl',
      description:
        '4 pieces of tempura shrimp, avocado, cucumber, red cabbage, carrots, radish, seaweed salad, green onion, eel sauce, spicy mayo, tempura crunchy',
    },
    {
      name: 'California Dreaming Bowl',
      description:
        'crab salad, avocado, cucumber, edamame, seaweed salad, lettuce, green onion, masago, spicy mayo, sesame seeds',
    },
    {
      name: 'Dancing Catfish Bowl',
      description:
        'torched crawfish, crab salad, avocado, cucumber, carrots, sweet corn, red onion, green onion, masago, spicy mayo, eel sauce, sesame seeds, crispy onion',
    },
  ];

  const images = [MenuImg1, MenuImg2, MenuImg3, MenuImg4];

  const sides = [
    { name: 'Miso Soup', price: '$2.00' },
    { name: 'Spam Musubi', price: '$3.50' },
    { name: 'Pork Gyoza (6 pieces)', price: '$5.88' },
    { name: 'Chicken Karaage (8 oz)', price: '$6.88' },
    { name: 'Tempura Shrimp (3 pieces)', price: '$6.99' },
    { name: 'Seaweed Salad', price: '$3.50' },
    { name: 'Squid Salad', price: '$4.99' },
    { name: 'Hawaiian Mac Salad', price: '$3.50' },
    { name: 'Edamame (in shell)', price: '$3.99' },
  ];

  const pokeByThePound = [
    { name: '1/2 lb Poke', price: '$15.00' },
    { name: '1 lb Poke', price: '$20.00' },
  ];

  return (
    <div>
      <h1 className='font-league font-semibold text-5xl md:text-7xl text-primary text-center pt-8 md:pt-14'>
        Menu
      </h1>
      <div className='home-bg py-24 md:py-32 lg:py-48'>
        <div className='text-center py-4 bg-primary'>
          <div className='text-white flex flex-col gap-4 mb-8'>
            <h2 className='font-league text-3xl md:text-5xl font-semibold'>
              Build Your Own Bowl
            </h2>
            <p className='text-center font-light max-md:w-5/6 md:max-w-lg mx-auto'>
              <span className='font-medium'>DISCLAIMER:</span> the
              build-your-own-bowl section is NOT FOR ORDERING, but simply a
              simulation of what your bowl could look like.
            </p>
          </div>
          <div className='bg-white p-8 sm:p-16 w-5/6 m-auto text-primary'>
            <div className='flex flex-wrap max-md:justify-center gap-2'>
              {categories.map(({ name }, index) => (
                <button
                  className={`${
                    name === selected
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'border-primary hover:bg-primary/20'
                  } border rounded-2xl px-3 text-lg transition duration-300 ease-in-out`}
                  key={index}
                  onClick={() => setSelected(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-12'>
              <div className='text-left md:space-y-4 space-y-3 mt-8 md:mt-16 order-last md:order-first'>
                <Step
                  {...categories.find(
                    (category) => category.name === selected
                  )!}
                />
              </div>
              <img
                src={BuildImage}
                className='size-44 md:size-64 md:m-10 place-self-center object-cover translate-y-7 aspect-square rounded-full w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-5/6 m-auto my-8 text-primary'>
        <div className='space-y-5 hidden lg:flex lg:flex-col lg:justify-between'>
          {images.map((image, index) => (
            <div
              className='aspect-square overflow-hidden size-[30rem]'
              key={index}
            >
              <img src={image} className='object-cover -translate-y-1/3' />
            </div>
          ))}
        </div>
        <div className='my-16 md:mx-16 md:block flex flex-col text-center lg:text-left'>
          <div>
            <h2 className='font-league text-3xl md:text-5xl font-semibold mb-2'>
              Our Signature Bowls
            </h2>
            <p className='text-s'>Regular $13.99&emsp;Large $16.99</p>
          </div>
          <div className='space-y-8 my-8 flex flex-col'>
            {bowls.map((bowl, index) => (
              <div key={index}>
                <p className='font-league font-semibold text-xl'>{bowl.name}</p>
                <p>{bowl.description}</p>
              </div>
            ))}
            {images.map((img, index) => (
              <div
                className='aspect-square overflow-hidden lg:hidden size-11/12 self-center'
                key={index}
              >
                <img src={img} className='object-cover -translate-y-1/3' />
              </div>
            ))}
          </div>
          <div className='space-y-5 my-10'>
            <h2 className='font-league text-3xl md:text-5xl font-semibold mb-2'>
              Side Dishes
            </h2>
            {sides.map((side, index) => (
              <div className='flex justify-between' key={index}>
                <p>{side.name}</p>
                <p>{side.price}</p>
              </div>
            ))}
          </div>
          <div className='space-y-5 my-10'>
            <h2 className='font-league text-3xl md:text-5xl font-semibold mb-2'>
              Poke by the Pound
            </h2>
            {pokeByThePound.map((item, index) => (
              <div className='flex justify-between' key={index}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
