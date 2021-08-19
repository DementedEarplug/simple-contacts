import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

export default (state, action) =>{
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts:[...state.contacts, action.payload]
      }
    case UPDATE_CONTACT:
      
      break;
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact)=>contact.id!==action.payload)
      }
    case FILTER_CONTACTS:
      
      break;
    case CLEAR_FILTER:
      
      break;
    case SET_CURRENT:
      return{
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return{
        ...state,
        current: null
      }
  
    default:
      return state
  }
}