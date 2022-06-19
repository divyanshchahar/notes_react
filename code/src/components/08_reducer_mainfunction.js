// standard react imports
import React, { useState, useReducer } from "react";

// importing functionality
import Banner from "./08_reducer_popup";
import { reducerPeopleList } from "./08_reducer_workflow";

// object to initialize state (state of the reducer)
const defaultState = {
  people: [],
  isBannerOpen: false,
  bannerContent: "",
};

// MAIN FUNCTION
const TestIndex = () => {
  const [name, setName] = useState(""); // state to hold a sing;e name
  const [state, dispatch] = useReducer(reducerPeopleList, defaultState); // reducer

  // function to handle addition of names
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  // function to clase popup banner
  const closeBanner = () => {
    dispatch({ type: "CLOSE_BANNER" });
  };

  return (
    <>
      {state.isBannerOpen && (
        <Banner closeBanner={closeBanner} bannerContent={state.bannerContent} />
      )}

      {/* form */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add </button>
      </form>

      {/* list of people */}
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TestIndex;
