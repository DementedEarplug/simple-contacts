//* Use reducer gives access to state and "dispatch" to dispatch actions to the reducer

import React, { useReducer } from "react";
import axios from "axios";
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
  GET_CONTACTS,
  CONTACT_ERROR,
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
    current: null,
    filtered: null,
    error: null,
    loading: true
  };

  // Pull out the state and dispatch from reducer by using the useReducer hook
  //* state - access anything in our state, dispatch - dispatch actions to reducer
  //* de-structure array returned by use reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Actions for the contact
  
  // Add contact
  const addContact = async (contact) => {
    // set headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };
  // Delete contact
  const deleteContact = (contactId) => {
    try {
      const res = axios.get("/api/auth");
      dispatch({ type: DELETE_CONTACT, payload: contactId });
    } catch (err) {}
  };
  // Update contact
  const updateContact = (contact) => {
    try {
      const res = axios.get("/api/auth");
      dispatch({ type: UPDATE_CONTACT, payload: contact });
    } catch (err) {}
  };
  // Set Current contact
  const setCurrentContact = (contact) => {
    try {
      const res = axios.get("/api/auth");
      dispatch({ type: SET_CURRENT, payload: contact });
    } catch (err) {}
  };
  // Clear current contact
  const clearCurrentContact = () => {
    try {
      const res = axios.get("/api/auth");
      dispatch({ type: CLEAR_CURRENT });
    } catch (err) {}
  };
  // Filter contacts
  const filterContacts = (text) => {
    try {
      const res = axios.get("/api/auth");
      dispatch({ type: FILTER_CONTACTS, payload: text });
    } catch (err) {}
  };

  // Clear Filters
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Get contacts
  const getContacts = async () =>{
    try {
      const res = await axios.get('/api/contacts')
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      })
    }
  }
  
  // * Returning the provider allows you to wrap the app with this context and have access to it.
  // * Anything that you want to access from other component needs to go inside the value field
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
