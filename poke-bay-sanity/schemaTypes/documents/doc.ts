export default {
	name: "Document",
	title: "Document",
	type: 'document',
	fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => (Rule).required()
        },
    ],
}
