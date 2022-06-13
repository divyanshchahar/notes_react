import React, { useState } from "react";

const ControlledInputs02 = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      alert("please fill all values");
    }
  };

  return (
    <>
      {/* form begins */}
      <div>
        <form>
          {/* input field - text */}
          <div>
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          {/* input field - text */}
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          {/* input field -  text */}
          <div>
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </div>
      {/* form ends */}

      {/* list of people */}
      <div>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ControlledInputs02;
