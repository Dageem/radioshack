import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../reducers/api";
import "./singleProduct.css";
import { addToCart } from "../../reducers/cart";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function SingleProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductsByIdQuery(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product!</p>;
  if (!product) return <p>Product not found!</p>;

  const handleImageChange = (direction) => {
    let newIndex = currentImageIndex;
    if (direction === "next") {
      newIndex = (newIndex + 1) % 3;
    } else {
      newIndex = (newIndex - 1 + 3) % 3;
    }
    setCurrentImageIndex(newIndex);
  };

  const displayedImage = [
    product.imageUrl,
    product.image2Url,
    product.image3Url,
  ][currentImageIndex];

  const getEmbedUrl = (url) => {
    const regex =
      /(youtube\.com\/(watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[3]}` : url;
  };

  return (
    <div className="single-product">
      <div className="product__image__details-container">
        <div className="product__image-container">
          {product.image2Url && (
            <button
              className="arrow arrow-left"
              onClick={() => handleImageChange("previous")}
            >
              &#x02190;
            </button>
          )}
          <img className="img1" src={displayedImage} alt={product.name} />
          {product.image2Url && (
            <button
              className="arrow arrow-right"
              onClick={() => handleImageChange("next")}
            >
              &#x02192;
            </button>
          )}
        </div>
        <div className="product__details-container">
          <div className="product__details-head">
            <h1>{product.name}</h1>
            <h2 className="product__price">
              <strong>${parseFloat(product.price).toFixed(2)}</strong>
            </h2>
          </div>
          <div className="product__details-details">
            <p>
              {product.details} Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Maxime perspiciatis alias nihil expedita
              ratione? Dicta illum autem molestiae modi in! Minus adipisci
              excepturi ab earum deleniti at cum, tempora quas?
            </p>
          </div>
        </div>
      </div>
      <div className="product__button-container">
        <button
          className="addToCart"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
        <button className="buyNow">Buy Now</button>
      </div>
      <div className="product__desc-container">
        <div className="product__desc-image-desc-container">
          <div className="product__desc-image">
            <img src={product.image3Url} alt={product.name} />
          </div>
          <div className="product__desc-desc">
            <p>
              <strong>Our Opinion: </strong>Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ipsam tenetur sed doloribus
              accusantium debitis culpa quae earum quasi numquam aspernatur,
              repellendus sunt iste dolorem similique itaque. Quas nam eveniet
              adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Corrupti, nesciunt ex odio soluta illo iste. Est aut nemo
              similique suscipit quas facere fugiat velit nisi harum dolorum?
              Magnam, amet similique.
            </p>
          </div>
        </div>
        <div className="product__video-table__container">
          <div>
            <div className="product__video-container">
              <h3>Product Video</h3>
              {product.videoUrl && (
                <div className="product__video">
                  <iframe
                    src={getEmbedUrl(product.videoUrl)}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="product__specifications-container">
            <h2>Specifications</h2>
            <table className="product__specifications">
              <tbody>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Headphone Design</td>
                  <td>Over-Ear, Open Back</td>
                </tr>
                <tr>
                  <td>Impedance</td>
                  <td>55 ohms</td>
                </tr>
                <tr>
                  <td>Sensitivity</td>
                  <td>104dB SPL / 1mW @ 1kHz</td>
                </tr>
                <tr>
                  <td>Total Harmonic Distortion (THD)</td>
                  <td>0,25% @ 1kHz / 100dB SPL</td>
                </tr>
                <tr>
                  <td>Frequency Response</td>
                  <td>5Hz - 28kHz</td>
                </tr>
                <tr>
                  <td>Driver Materials & Size</td>
                  <td>1.6" (40mm) Aluminum/Magnesium 'M'-shape dome</td>
                </tr>
                <tr>
                  <td>Headphone Weight</td>
                  <td>450 grams</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>3 years manufacturer's warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
