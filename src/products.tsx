/* eslint-disable react/jsx-key */
import { fetchProduct } from './utils';
import { useEffect, useState } from 'react';
import { Product } from './product';

function Products() {
  const [data, dataSet] = useState<any>([]);
  useEffect(() => {
    fetchProduct('Samsung').then(products => {
      dataSet([...products.products]);
    });
  }, []);
  return (
    <>
      {data.map(productData => {
        return <Product key={productData.id} {...productData} />;
      })}
    </>
  );
}

export default Products;
