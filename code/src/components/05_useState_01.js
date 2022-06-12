import React, { useState } from "react";

const UseState01 = () => {
  const [text, setText] = useState("First Title");

  const handleClick = () => {
    if (text === "First Title") {
      setText("Second Title");
    } else {
      setText("First Title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change My Title
      </button>
    </>
  );
};

export default UseState01;
