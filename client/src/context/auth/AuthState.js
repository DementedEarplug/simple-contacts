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
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  // Pull out the state and dispatch from reducer by using the useReducer hook
  //* state - access anything in our state, dispatch - dispatch actions to reducer
  //* de-structure array returned by use reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Actions for the auth context

  // Load user

  // Register User

  // Login User

  // Logout

  // Clear Errors

  // * Returning the provider allows you to wrap the app with this context and have access to it.
  // * Anything that you want to access from other component needs to go inside the value field
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
