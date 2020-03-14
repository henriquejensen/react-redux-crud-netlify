import { createStore } from "redux";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_CONTACT": {
      const newContact = {
        id: Math.floor(Math.random() * 100000),
        name: action.payload.name,
        email: action.payload.email
      };
      const newContacts = [...state.contacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts
      };
    }
    case "DELETE_CONTACT": {
      const newContacts = state.contacts.filter(
        contact => contact.id !== action.contact.id
      );
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts
      };
    }
    case "EDIT_CONTACT": {
      const newContacts = state.contacts.map(contact => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts
      };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
