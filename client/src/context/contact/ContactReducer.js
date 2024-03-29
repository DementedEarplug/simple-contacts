import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS_FROM_STATE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact._id === action.payload._id) {
            return action.payload;
          }
          return contact;
        }),
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.contactId
        ),
        loading: false,
        error: action.payload
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            contact.name.match(regex) ||
            contact.email.match(regex) ||
            contact.phone.match(regex) ||
            contact.type.match(regex)
          );
        }),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_CONTACTS_FROM_STATE:
      return {
        ...state,
        loading: false,
        contacts: null,
      };

    default:
      return state;
  }
};
