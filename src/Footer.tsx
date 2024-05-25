import { useState, useEffect } from 'react';

import sanityClient from './client.tsx';
import { FacebookIcon } from './assets/SocialIcons.tsx';
import { InstagramIcon } from './assets/SocialIcons.tsx';
import { YelpIcon } from './assets/SocialIcons.tsx';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [yelp, setYelp] = useState('');

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type=='footer'][0]`;
      const { email, phoneNumber, instagram, facebook, yelp } =
        await sanityClient.fetch(query);
      setEmail(email);
      setPhoneNumber(phoneNumber);
      setInstagram(instagram);
      setFacebook(facebook);
      setYelp(yelp);
    };

    getData();
  }, []);

  return (
    <footer className='footer pt-24 pb-10 md:pb-20 md:pt-40 text-white w-screen'>
      <div className='flex flex-col md:flex-row md:justify-between w-5/6 m-auto'>
        <div className='footerText mb-3 md:text-md'>
          <p className='text-2xl md:text-4xl md:pt-10 mt-8 mb-4 font-semibold font-league'>
            Poke Bay
          </p>
          <div className='font-light'>
            <p>4215 University Way NE</p>
            <p className='mb-2'> Seattle, WA 98105</p>
            <p className='mb-2'>{phoneNumber}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className='md:mt-auto'>
          <div className='socialLinks md:justify-end mt-10 pl-1 flex pb-3'>
            <a
              className='group mr-5'
              href={instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon />
            </a>
            <a
              className='group mr-5'
              href={facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon />
            </a>
            <a
              className='group'
              href={yelp}
              target='_blank'
              rel='noopener noreferrer'
            >
              <YelpIcon />
            </a>
          </div>

          <div className='copyright font-light md:text-right md:mt-4'>
            <p className='leading-4 text-sm uppercase'>
              {`© ${new Date().getFullYear()} Poke Bay, All Rights Reserved`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
