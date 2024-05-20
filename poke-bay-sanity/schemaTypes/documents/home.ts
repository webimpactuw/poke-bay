export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'featuredBowls', title: 'Featured Bowls'},
    {name: 'mission', title: 'Mission'},
    {name: 'visit', title: 'Visit Us'},
  ],
  fields: [
    {
      name: 'featuredBowls',
      title: 'Featured Bowls',
      type: 'array',
      of: [
        {
          type: 'featuredBowl',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mission',
      title: 'Mission',
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
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'img',
          title: 'Image',
          type: 'image',
          validation: (Rule: any) => Rule.required(),
        },
      ],
      group: 'mission',
    },
    {
      name: 'visit',
      title: 'Visit Us',
      type: 'object',
      fields: [
        {
          name: 'hours',
          title: 'Hours',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule: any) => Rule.required(),
        },
      ],
      group: 'visit',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
}
