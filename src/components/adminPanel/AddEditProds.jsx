import React, { useState } from "react";
import "./addEditProds.css";
import { Link } from "react-router-dom"
import {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../reducers/api";

function AddEditProds() {
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const { data: products, refetch } = useGetProductsQuery();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    image2Url: "",
    image3Url: "",
    videoUrl: "",
    details: "",
    categoryId: "1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      try {
        await updateProduct({ id: formData.id, ...formData });
        alert("Product updated successfully!");
      } catch (error) {
        console.error("There was an error updating the product!", error);
      }
    } else {
      try {
        await createProduct(formData);
        alert("Product created successfully!");
      } catch (error) {
        console.error("There was an error creating the product!", error);
      }
    }
    refetch();
    setFormData({
      name: "",
      price: "",
      imageUrl: "",
      image2Url: "",
      image3Url: "",
      videoUrl: "",
      details: "",
      categoryId: "1",
    });
  };

  const handleEdit = (product) => {
    setFormData(product);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      alert("Product deleted!");
      refetch();
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  return (
    <div className="admin-panel">
      <Link to="/admin" >
        <button className="back-btn">Back to Admin Panel</button>
      </Link>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image URL 1:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL 2:</label>
          <input
            type="text"
            name="image2Url"
            value={formData.image2Url}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL 3:</label>
          <input
            type="text"
            name="image3Url"
            value={formData.image3Url}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Video URL:</label>
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Details:</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category ID:</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            required
          >
            <option value="1">1</option>
            <option value="11">11</option>
            <option value="21">21</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          {formData.id ? "Update Product" : "Add Product"}
        </button>
      </form>
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button
                  onClick={() => handleEdit(product)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddEditProds;