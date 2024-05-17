export default {
  name: 'menuItem',
  title: 'Menu Item',
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
