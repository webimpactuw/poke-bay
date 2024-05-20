import { PortableTextComponents } from '@portabletext/react';

// Passed into PortableText components to apply styling
export const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className='underline underline-offset-4 decoration-[0.5px] hover:text-primary transition duration-300'
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className='list-disc pl-5'>{children}</ul>,
  },
};
