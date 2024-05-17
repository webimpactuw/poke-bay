export default {
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    {
      name: 'index',
      title: 'Step Number',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
