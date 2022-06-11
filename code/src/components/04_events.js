import React from "react";
import ReactDOM from "react-dom";

const people = [
  { id: 1, name: "Divyansh", profession: "Developer" },
  { id: 2, name: "Suhani", profession: "Decorator" },
];

const onClickFunction = (title) => {
  alert(title);
};

function BasicEvent() {
  return (
    <>
      {people.map((props) => {
        const { id, name, profession } = props;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <button type="button" onClick={() => onClickFunction(name)}>
              click on me
            </button>
          </div>
        );
      })}
    </>
  );
}

ReactDOM.render(<BasicEvent />, document.getElementById("root"));
