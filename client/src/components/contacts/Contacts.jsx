import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  // gives access to the state of this context.
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
