import React, { useState, useEffect } from "react";
import { useFetch } from "./10_custom_hooks_2";

const url = "https://course-api.com/javascript-store-products";

const CustomHook = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default CustomHook;
