import React from "react";
import ReactDOM from "react-dom";

const people = [
  { id: 1, name: "Divyansh", profession: "Developer" },
  { id: 2, name: "Suhani", profession: "Decorator" },
];

const PeopleList = () => {
  return (
    <>
      {people.map((props) => {
        const { id, name, profession } = people;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{profession}</h2>
          </div>
        );
      })}
    </>
  );
};

ReactDOM.render(<PeopleList />, document.getElementById("root"));
