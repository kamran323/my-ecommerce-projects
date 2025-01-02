import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});
