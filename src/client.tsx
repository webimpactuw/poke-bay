import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '811mmoaa',
  dataset: 'production',
  apiVersion: '2024-05-17',
  useCdn: true,
});

export default client;
