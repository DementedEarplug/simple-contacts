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

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      break;
    case REGISTER_FAIL:
      break;
    case USER_LOADED:
      break;
    case AUTH_ERROR:
      break;
    case LOGIN_SUCCESS:
      break;
    case LOGIN_FAILED:
      break;
    case LOGOUT:
      break;
    case CLEAR_ERRORS:
      break;
    default:
      return state;
  }
};
