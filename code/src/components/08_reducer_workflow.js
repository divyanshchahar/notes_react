// FLOW FOR HANDLING PEOPLE LIST
export const reducerPeopleList = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isBannerOpen: true,
      bannerContent: "Item added succefully",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isBannerOpen: true,
      bannerContent: "Please enter a value",
    };
  }

  if (action.type === "CLOSE_BANNER") {
    return { ...state, isBannerOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }

  throw new Error("OOPS! Something went wrong");
};
