import { FacebookIcon } from './icons/Socialicons';
import { InstagramIcon } from './icons/Socialicons';
import { YelpIcon } from './icons/Socialicons';

const Footer = () => {
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
            <p className='mb-2'>(425) 550-5086</p>
            <p>pokebay.info@gmail.com</p>
          </div>
        </div>
        <div className='md:mt-auto'>
          <div className='socialLinks md:justify-end mt-10 pl-1 flex pb-3'>
            <a
              className='group mr-5'
              href='https://www.instagram.com/pokebay_udistrict/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon />
            </a>
            <a
              className='group mr-5'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon />
            </a>
            <a
              className='group'
              href='https://www.yelp.com/biz/poke-bay-seattle'
              target='_blank'
              rel='noopener noreferrer'
            >
              <YelpIcon />
            </a>
          </div>

          <div className='copyright font-light md:text-right md:mt-4'>
            <p className='leading-4 text-sm'>
              &#169; 2024 POKE BAY, ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
