export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'featuredItems', title: 'Featured Items'},
    {name: 'firstSection', title: 'First Section'},
    {name: 'visitUsSection', title: 'Visit Us Section'},
  ],
  fields: [
    {
      name: 'featuredItems',
      title: 'Featured Items',
      type: 'array',
      of: [
        {
          type: 'homeFeaturedItem'
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'First Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'firstSection',
    },
    {
      name: 'shortDesc',
      title: 'Short Description Under Heading',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      group: 'firstSection',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      group: 'firstSection',
    },
    {
      name: 'storeName',
      title: 'Name of the Store',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'visitUsSection',
    },
    {
      name: 'address',
      title: 'Address Line',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'visitUsSection',
    },
    {
      name: 'citystatezip',
      title: 'City, State, and Zip (in the format: City, State Zip)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'visitUsSection',
    },
    {
      name: 'opening',
      title: 'Opening Times',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'visitUsSection',
    },
  ],
}
