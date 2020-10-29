import React from "react";

import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAxiosGet } from "../hooks/HttpRequest";

function Product() {
  const { id } = useParams();
  const url = `https://5f9a6c949d94640016f70a49.mockapi.io/products/${id}`;
  let content = null;
  let product = useAxiosGet(url);

  if (product.loading) {
    content = <Loader />;
  }

  if (product.error) {
    content = <p>There was an error. Please try again later!</p>;
  }
  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.image} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
