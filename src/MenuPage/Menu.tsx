import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';

import sanityClient from '../client.tsx';
import Step from './Step';

type Category = {
  index: number;
  name: string;
  heading: string;
  ingredients: string[];
};

type Prices = {
  regular: string;
  large: string;
};

type Bowl = {
  name: string;
  description: string;
};

type MenuItem = {
  name: string;
  price: string;
};

function Menu() {
  const [selected, setSelected] = useState('base');
  const [categories, setCategories] = useState<Category[]>([]);
  const [buildImg, setBuildImg] = useState<string>();
  const [prices, setPrices] = useState<Prices>();
  const [bowls, setBowls] = useState<Bowl[]>([]);
  const [sides, setSides] = useState<MenuItem[]>([]);
  const [pokeByThePound, setPokeByThePound] = useState<MenuItem[]>([]);
  const [images, setImages] = useState<string[]>([]);

  // For loading images
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source: string) {
    return builder.image(source);
  }

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type=='menu'][0]`;
      const data = await sanityClient.fetch(query);
      Object.values(data).forEach((value) => {
        if (typeof value === 'object' && value !== null && '_type' in value) {
          delete value._type;
        }
      });
      const { buildBowl, prices, bowls, sideDishes, pokeByThePound, images } =
        data;

      const { image, ...rest } = buildBowl;
      setBuildImg(image);

      const categories = Object.entries(rest)
        .sort(([, a], [, b]) => (a as Category).index - (b as Category).index)
        .map((item) => {
          const { index, heading, ingredients } = item[1] as Category;
          return {
            index: index,
            name: item[0],
            heading: heading,
            ingredients: ingredients,
          };
        });
      setCategories(categories);

      setPrices(prices);

      setBowls(
        bowls.map(
          ({ name, description }: { name: string; description: string }) => ({
            name,
            description,
          })
        )
      );

      setSides(
        sideDishes.map(({ name, price }: { name: string; price: string }) => ({
          name,
          price,
        }))
      );

      setPokeByThePound(
        pokeByThePound.map(
          ({ name, price }: { name: string; price: string }) => ({
            name,
            price,
          })
        )
      );

      setImages(Object.values(images));
    };

    getData();
  }, []);

  return (
    <div>
      <h1 className='font-league font-semibold text-5xl md:text-7xl text-primary text-center pt-8 md:pt-14'>
        Menu
      </h1>
      {categories.length > 0 && buildImg && (
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
                    } border rounded-2xl px-3 text-lg transition duration-300 ease-in-out capitalize`}
                    key={index}
                    onClick={() => setSelected(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className='flex flex-col md:flex-row justify-between gap-12 max-md:mt-4'>
                <div className='text-left md:space-y-4 space-y-3 mt-4 md:mt-16 order-last md:order-first'>
                  <Step
                    {...categories.find(
                      (category) => category.name === selected
                    )!}
                  />
                </div>
                <img
                  src={urlFor(buildImg).url()}
                  className='max-w-xs size-44 md:size-64 md:m-10 place-self-center object-cover translate-y-7 aspect-square rounded-full w-full h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='flex w-5/6 m-auto my-8 text-primary'>
        <div className='space-y-5 hidden lg:flex lg:flex-col lg:justify-between'>
          {images.map((img, index) => (
            <div
              className='aspect-square overflow-hidden size-[30rem]'
              key={index}
            >
              <img
                src={urlFor(img).url()}
                className='object-cover -translate-y-1/3'
              />
            </div>
          ))}
        </div>
        <div className='mt-16 md:mx-16 md:block flex flex-col text-center lg:text-left'>
          <div>
            <h2 className='font-league text-3xl md:text-5xl font-semibold mb-2'>
              Our Signature Bowls
            </h2>
            {prices && (
              <p className='text-s'>
                Regular {prices.regular}&emsp;Large {prices.large}
              </p>
            )}
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
                <img
                  src={urlFor(img).url()}
                  className='object-cover -translate-y-1/3'
                />
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
