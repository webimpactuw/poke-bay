export default {
	name: "HomeImages",
	title: "Featured Items on Home Page",
	type: 'document',
	fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        }
    ],
}
