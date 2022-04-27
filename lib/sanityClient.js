import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'kltwolhk',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk8hYyhN7NN0lUKsrD9WCqOu9uMHSNDWQrYUKEk8FhYUXwhbVH6CBeKK85su9uh4XovV5HHUjrZvETKvJjT1axxw299N6KkgsOkkCUlpBUW99BOgln54ZvGDu5qAJYUHtSeLwTgtJrzfrhfC4pujRL9dMtRBJFtpVBi4oEbz6OpunL9YLjnb',
  useCdn: false,
})
