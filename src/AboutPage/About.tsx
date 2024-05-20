import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

import sanityClient from '../client.tsx';
import { loadImage } from '../lib/loadImage.ts';
import { components } from '../lib/portableText.tsx';

type Header = {
  heading: string;
  img: string;
};

type Section = {
  heading: string;
  body: [];
  img: string;
};

function About() {
  const [header, setHeader] = useState<Header>();
  const [section, setSection] = useState<Section>();

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type=='about'][0]`;
      const { header, section } = await sanityClient.fetch(query);
      setHeader(header);
      setSection(section);
    };

    getData();
  }, []);

  return (
    <>
      <section className='pt-8 md:pt-14 flex justify-center items-center flex-col gap-8 text-primary'>
        <h1 className='font-league font-semibold text-5xl md:text-7xl'>
          About
        </h1>
        {header && (
          <img
            src={loadImage(header.img)}
            alt=''
            className='w-5/6 aspect-video object-cover'
          />
        )}
      </section>

      {section && (
        <section className='py-12 md:py-16 mx-auto text-primary flex flex-col gap-8 md:flex-row items-center justify-between w-5/6 md:gap-20'>
          <div className='flex flex-col gap-4 md:max-w-md'>
            <h2 className='font-league font-semibold text-3xl md:text-5xl'>
              {section.heading}
            </h2>
            <PortableText value={section.body} components={components} />
          </div>
          <img
            src={loadImage(section.img)}
            alt=''
            className='w-screen md:w-3/6 aspect-[3/2] object-cover'
          />
        </section>
      )}
    </>
  );
}

export default About;
