export default {
  name: 'footer',
  title: 'Footer Links & Content',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phoneNumber',
      title: 'Contact Phone Number',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'yelp',
      title: 'Yelp URL',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
}
