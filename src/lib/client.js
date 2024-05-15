import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '811mmoaa',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true
})


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);