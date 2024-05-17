export default {
  name: 'menuItems',
  title: 'Menu Items',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
