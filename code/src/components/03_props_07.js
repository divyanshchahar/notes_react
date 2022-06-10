import React from "react";
import ReactDOM from "react-dom";

const person1 = [
  { id: 1, name: "Divyansh", profession: "Developer" },
  { id: 2, name: "Suhani", profession: "Decorator" },
];

BookList = () => {
  return (
    <>
      {books.map(() => {
        return "hello";
      })}
    </>
  );
};

ReactDOM.render(<PeopleList />, document.getElementById("root"));
