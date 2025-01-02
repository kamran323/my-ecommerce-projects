import { sanityClient } from '../../../lib/sanity';

export default function handler(req, res) {
  const { slug } = req.query;
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  sanityClient.fetch(query, { slug })
    .then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    })
    .catch(error => res.status(500).json({ message: error.message }));
}
