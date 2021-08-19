import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import FilterContacts from "./FilterContacts";

const Contacts = () => {
  // gives access to the state of this context.
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if(contacts.length===0){
    return <h4 className="text-center">Please a a contact.</h4>
  }

  return (
    <Fragment>
      <FilterContacts />
      {filtered
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
