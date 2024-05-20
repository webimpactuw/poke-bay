export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'section', title: 'Section'},
  ],
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        {
          name: 'img',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.required(),
        },
      ],
      group: 'header',
    },
    {
      name: 'section',
      title: 'Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'img',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.required(),
        },
      ],
      group: 'section',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'About',
      }
    },
  },
}
