import React, { useState } from "react";

const ControlledInputs01 = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); //  preventing default behaviour
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      alert("empty values");
    }
  };
  return (
    <>
      <div>
        {/* from begins */}
        <form onSubmit={handleSubmit}>
          {/* text field - name */}
          <div>
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* text field - email */}
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* button  */}
          <button type="submit">add person</button>
        </form>
        {/* form ends */}

        {/* functionality to add people */}
        {people.map((person, index) => {
          const { id, firstName, email } = person;

          return (
            <div key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ControlledInputs01;
