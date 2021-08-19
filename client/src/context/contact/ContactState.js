//* Use reducer gives access to state and "dispatch" to dispatch actions to the reducer

import React, { useReducer } from "react";
import {v4 as uuid} from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

const ContactState = (props) => {
  // Create initial state
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Gato Goriambo",
        type: "professional",
        phone: "787-870-5543",
        email: "jojostoro@email.com",
      },
      {
        id: 2,
        name: "Setsu Sorian",
        type: "professional",
        phone: "787-870-5544",
        email: "tempuCali@email.com",
      },
      {
        id: 3,
        name: "Majimbu Melendez",
        type: "personal",
        phone: "787-870-5545",
        email: "cookieStain@email.com",
      },
    ],
  };

  // Pull out the state and dispatch from reducer by using the useReducer hook
  //* state - access anything in our state, dispatch - dispatch actions to reducer
  //* de-structure array returned by use reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Actions for the contact

  // Add contact
  const addContact = (contact) => {
    contact.id = uuid()
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contact

  // Update contact

  // Set Current contact

  // Clear current contact

  // Filter contacts

  // Clear Filters

  // * Returning the provider allows you to wrap the app with this context and have access to it.
  // * Anything that you want to access from other component needs to go inside the value field
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact: addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
