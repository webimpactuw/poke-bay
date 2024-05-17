export default {
  name: 'buildBowl',
  title: 'Build Your Own Bowl',
  type: 'object',
  fields: [
    {
      name: 'base',
      title: 'Base',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'proteins',
      title: 'Proteins',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sides',
      title: 'Sides',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sauce',
      title: 'Sauce',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
