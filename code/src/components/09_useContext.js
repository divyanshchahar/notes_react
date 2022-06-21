import React, { useState, useContext } from "react";

export const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const PersonContext = React.createContext();

// MAIN COMPONENT
const ContextAPI = () => {
  const [people, setPeople] = useState(data); // list of people

  // FUNCTION TO REMOVE A PERSON
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // provider - begins (passing removePerson)
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
    // provider - ends
  );
};

// COMPONENET THAT WILL RETURN LIST
const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

// COMPONENT THAT WILL RETUIRN LIST MEMEBERS
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
