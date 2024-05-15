export default {
	name: "menuImg",
	title: "Featured Items on Home Page",
	type: 'document',
	fields: [
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: (Rule: any) => (Rule).required()
        }
    ]
}
