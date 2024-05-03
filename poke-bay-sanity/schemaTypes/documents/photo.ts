export default {
    name: "photo",
    title: "Photo",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        }
    ],
};