import React, { useReducer } from "react";
import axios from "axios";

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
  CLEAR_FILTER,
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
  const loadUser = (params) => {};

  // Register User
  const registerUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      console.log("Register Sucess");
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = (params) => {};
  
  // Logout
  const logout = (params) => {};

  // Clear Errors
  const clearErrors = () => {dispatch({type:CLEAR_ERRORS})};

  
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
        registerUser,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
