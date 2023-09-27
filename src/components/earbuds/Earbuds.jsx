import React from "react";
import { useGetProductsByCategoryQuery } from "../../reducers/api";
import "./earbuds.css";


function Earbuds() {
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsByCategoryQuery("Earbuds");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;
  if (!products || products.length === 0) return <p>No products found!</p>;

  return (
    <section className="products">
      <h2 className="products__head">Earbuds</h2>
      <div className="products__container">
        <ul className="products__list">
          {products.map((product) => (
            <li className="product" key={product.id}>
              <div className="product__card">
                <figure className="product__image-container">
                  <img src={product.imageUrl} alt={product.name} />
                </figure>
                <div className="product__details">
                  <h1 className="product__name">{product.name}</h1>
                  <h4 className="product__price">
                    ${parseFloat(product.price).toFixed(2)}
                  </h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Earbuds;


