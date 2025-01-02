import Hero from "./Sections/Hero";
import CoreTracks from "./shared/CoreTracks";
import Outcome from "./shared/Outcome";
import SpecializedTracks from "./shared/SpecializedTracks";
import axios from 'axios';
import { SetStateAction, useEffect, useState} from 'react';

export default function  Home() {
  const [products, setProducts] = useState([]);

  useEffect((): void => {
    axios.get('/api/products')
        .then((response: { data: SetStateAction<never[]>; }) => setProducts(response.data))
      .catch((error: any) => console.error(error));
  }, []);

  return (
    <>
      <main>
        {/* Hero section */}
        <Hero />
        {/* Core Section */}
        <CoreTracks />
        {/* SpecializedTracks */}
        <SpecializedTracks />
        {/* Outcome tracks */}
        <Outcome />

        {/* Products Section */}
        <section>
          <h2>Products</h2>
          <div>
            {products.map(product => (
              <div key={product.slug}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
