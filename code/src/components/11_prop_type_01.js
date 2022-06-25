import React from "react";
import my_data from "../assets/my_data.json";
import ItemList from "./11_prop_type_02";

const PropTypeDemo = () => {
  const items = my_data.data;
  return items.map((item) => {
    return <ItemList key={item.id} {...item} />;
  });
};

export default PropTypeDemo;
