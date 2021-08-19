import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  // Create initial state
  const initialState = {};

  // Pull out the state and dispatch from reducer by using the useReducer hook
  //* state - access anything in our state, dispatch - dispatch actions to reducer
  //* de-structure array returned by use reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Actions for the auth context

  // Action for REGISTER_SUCCESS

  // Action for REGISTER_FAIL

  // Action for USER_LOADED

  // Action for AUTH_ERROR

  // Action for LOGIN_SUCCESS

  // Action for LOGIN_FAILED

  // Action for LOGOUT

  // Action for CLEAR_ERRORS


  // * Returning the provider allows you to wrap the app with this context and have access to it.
  // * Anything that you want to access from other component needs to go inside the value field
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
