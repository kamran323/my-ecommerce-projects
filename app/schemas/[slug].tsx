import { useRouter } from 'next/router';
import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (slug) {
      axios.get(`/api/products/${slug}`)
        .then((response: { data: SetStateAction<null>; }) => setProduct(response.data))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => console.error(error));
    }
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
