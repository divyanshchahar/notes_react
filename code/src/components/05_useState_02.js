import React, { useState } from "react";

const UseState02 = () => {
  var data = [
    { id: 1, name: "Suhani" },
    { id: 2, name: "Divyansh" },
  ];

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    var newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear Items</button>
    </>
  );
};

export default UseState02;
