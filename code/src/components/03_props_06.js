import React from "react";
import ReactDOM from "react-dom";

const person1 = { name: "Divyansh", profession: "Developer" };
const person2 = { name: "Suhani", profession: "Decorator" };

function DisplayPeople(props) {
  const { name, profession } = props;
  return (
    <>
      <h1>{name}</h1>
      <h2>{profession}</h2>
      {props.children}
    </>
  );
}

function PeopleList() {
  return (
    <>
      <DisplayPeople name={person1.name} profession={person1.profession}>
        <p>I have children</p>
      </DisplayPeople>
      <DisplayPeople name={person2.name} profession={person2.profession} />
    </>
  );
}

ReactDOM.render(<PeopleList />, document.getElementById("root"));
// note: paste this code in index.js to run this demo
