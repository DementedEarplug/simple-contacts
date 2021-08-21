import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import {v4 as uuid} from "uuid"


const AlertState = (props) => {

  const initialState = []

  const [state, dispatch] = useReducer(AlertReducer, initialState)
  
  // Alert Actions
  const setAlert = (msg, type, timeout=3000) => {
    const id = uuid()
    dispatch({
      type: SET_ALERT,
      payload: {
        id,
        msg,
        type
      }
    })

    //remove alert after 3 seconds
    setTimeout(() => {
      dispatch({type: REMOVE_ALERT, payload: id})
    }, timeout);
  }

  // * Returning the provider allows you to wrap the app with this context and have access to it.
  // * Anything that you want to access from other component needs to go inside the value field
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
