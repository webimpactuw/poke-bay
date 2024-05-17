export default {
  name: 'bowlPrices',
  title: 'Bowl Prices',
  type: 'object',
  fields: [
    {
      name: 'regular',
      title: 'Regular',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'large',
      title: 'Large',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
