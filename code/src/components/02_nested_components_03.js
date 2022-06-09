import React from "react";
import InnerFunction1 from "./02_nested_components_01";
import InnerFunction2 from "./02_nested_components_02";

function NestedComponent() {
  return (
    <>
      <InnerFunction1 />
      <InnerFunction2 />
    </>
  );
}

export default NestedComponent;
