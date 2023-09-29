import React, { useState } from "react";
import { useGetProductsByCategoryQuery } from "../../reducers/api";
import "./headphones.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Headphones() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsByCategoryQuery("Speakers");

  const [sortOrder, setSortOrder] = useState("");

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const sortedProducts = [...(products || [])].sort((a, b) => {
    switch (sortOrder) {
      case "lowToHigh":
        return parseFloat(a.price) - parseFloat(b.price);
      case "highToLow":
        return parseFloat(b.price) - parseFloat(a.price);
      default:
        return 0;
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;
  if (!sortedProducts || sortedProducts.length === 0)
    return <p>No products found!</p>;

  return (
    <section className="products">
      <h2 className="products__head">Speakers</h2>
      <div className="products__container">
        <div className="sort-container">
          <select
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOrder}
          >
            <option value="">Filter Products</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
        <ul className="products__list">
          {sortedProducts.map((product) => (
            <li className="product" key={product.id}>
              <Link to={`/product/${product.id}`} className="product__card">
                <div className="product__card">
                  <figure className="product__image-container">
                    <img src={product.imageUrl} alt={product.name} />
                  </figure>
                  <div className="product__details">
                    <h1 className="product__name">{product.name}</h1>
                    <h3 className="product__price">
                      ${parseFloat(product.price).toFixed(2)}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Headphones;