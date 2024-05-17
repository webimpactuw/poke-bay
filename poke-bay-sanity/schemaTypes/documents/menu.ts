export default {
  name: 'menu',
  title: 'Menu Page',
  type: 'document',
  groups: [
    {name: 'buildBowl', title: 'Build Your Own Bowl'},
    {name: 'signatureBowls', title: 'Signature Bowls'},
    {name: 'sideDishes', title: 'Side Dishes'},
    {name: 'pokeByThePound', title: 'Poke by the Pound'},
    {name: 'images', title: 'Images'},
  ],
  fields: [
    {
      name: 'buildBowl',
      title: 'Build Your Own Bowl',
      type: 'buildBowl',
      validation: (Rule: any) => Rule.required(),
      group: 'buildBowl',
    },
    {
      name: 'prices',
      title: 'Bowl Prices',
      type: 'bowlPrices',
      validation: (Rule: any) => Rule.required(),
      group: 'signatureBowls',
    },
    {
      name: 'bowls',
      title: 'Signature Bowls',
      type: 'array',
      of: [
        {
          type: 'bowl',
        },
      ],
      validation: (Rule: any) => Rule.required(),
      group: 'signatureBowls',
    },
    {
      name: 'sideDishes',
      title: 'Side Dishes',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
      group: 'sideDishes',
    },
    {
      name: 'pokeByThePound',
      title: 'Poke by the Pound',
      type: 'array',
      of: [
        {
          type: 'menuItem',
        },
      ],
      group: 'pokeByThePound',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'menuImages',
      validation: (Rule: any) => Rule.required(),
      group: 'images',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Menu',
      }
    },
  },
}
