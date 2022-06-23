import React from "react";
import { useFetch } from "./10_custom_hooks_2";

const url = "https://api.sampleapis.com/coffee/iced";

const CustomHook = () => {
  const { loading, products } = useFetch(url);
  return (
    <>
      <h1>{loading ? "Coffe is brewing ...." : "Today's Menu"}</h1>;
      {products.map((product) => {
        console.log(product);
        return <h4 key={product.id}>{product.title}</h4>;
      })}
    </>
  );
};

export default CustomHook;
