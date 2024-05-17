export default {
	name: "homeContent",
	title: "Content of Homepage",
	type: 'document',
	fields: [
        {
            name: "heading",
            title: "First Heading",
            type: "string",
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'shortdesc',
            title: 'Short Description Under Heading',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'storeName',
            title: 'Name of the Store',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'address',
            title: 'Address Line',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'citystatezip',
            title: 'City, State, and Zip (in the format: City, State Zip)',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        },
        {
            name: 'opening',
            title: 'Opening Times',
            type: 'string',
            validation: (Rule: any) => (Rule).required()
        }
    ],
}
