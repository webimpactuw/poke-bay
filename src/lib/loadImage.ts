import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client.tsx';

// For loading images
const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: string) => {
  return builder.image(source);
};

export const loadImage = (img: string) => {
  return urlFor(img).url();
};
