import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../reducers/api";
import "./singleProduct.css";
// import addToCart from "../cart/Cart";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductsByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product!</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="single-product">
      <div className="product__image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product__details-container">
        <h1>{product.name}</h1>
        <h2>
          <strong>${parseFloat(product.price).toFixed(2)}</strong>
        </h2>
        <p>
          {product.details} Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Maxime perspiciatis alias nihil expedita ratione? Dicta illum
          autem molestiae modi in! Minus adipisci excepturi ab earum deleniti at
          cum, tempora quas?
        </p>
      </div>
      <div className="product__button-container">
        <button className="addToCart">Add to Cart</button>
        <button>Buy Now</button>
      </div>
      <div className="product__desc-container">
        {/* <div>
          eventual secondary image...
        </div> */}
        <p>
          <strong>Our Opinion: </strong>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ipsam tenetur sed doloribus accusantium debitis
          culpa quae earum quasi numquam aspernatur, repellendus sunt iste
          dolorem similique itaque. Quas nam eveniet adipisci. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Corrupti, nesciunt ex odio
          soluta illo iste. Est aut nemo similique suscipit quas facere fugiat
          velit nisi harum dolorum? Magnam, amet similique.
        </p>
      </div>
    </div>
  );
}

export default SingleProduct;
