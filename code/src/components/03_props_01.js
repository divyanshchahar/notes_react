import React from "react";
import ReactDOM from "react-dom";

const person1 = { name: "Divyansh", profession: "Developer" };
const person2 = { name: "Suhani", profession: "Decorator" };

function DisplayPeople(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.profession}</h2>
    </>
  );
}

function PeopleList() {
  return (
    <>
      <DisplayPeople name={person1.name} profession={person1.profession} />
      <DisplayPeople name={person2.name} profession={person2.profession} />
    </>
  );
}

ReactDOM.render(<PeopleList />, document.getElementById("root"));
// note: paste this code in index.js to run this demo
