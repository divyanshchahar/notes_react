import React from "react";
import { useFetch } from "./10_custom_hooks_2";

const url = "https://fortnite-api.com/v2/cosmetics/br";

const CustomHook = () => {
  const { loading, products } = useFetch(url);
  return (
    <>
      <h1>{loading ? "Items are Loading.." : "Availible Items"}</h1>
      {products.map((product) => {
        return <h4 key={product.id}>{product.name}</h4>;
      })}
    </>
  );
};

export default CustomHook;
