export default {
	name: "about",
	title: "About Page",
	type: 'document',
	fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'bannerImg',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'textContent',
            title: 'Text Content',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'contentImg',
            title: 'Image for the Text Content',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule: any) => (Rule).required()
        }
    ],
}
