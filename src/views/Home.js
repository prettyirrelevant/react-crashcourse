import React from "react";
import Loader from "../components/Loader.js";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../hooks/HttpRequest.js";

function Home() {
  let content = null;
  const url = "https://5f9a6c949d94640016f70a49.mockapi.io/products?limit=10";
  let products = useAxiosGet(url);

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <p>There was an error. Please try again later!</p>;
  }

  if (products.data) {
    content = products.data.map((product, key) => <ProductCard product={product} />);
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
