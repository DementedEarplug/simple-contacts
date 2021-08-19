import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import FilterContacts from "./FilterContacts";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  // gives access to the state of this context.
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4 className='text-center'>Please a a contact.</h4>;
  }

  return (
    <Fragment>
      <FilterContacts />
      <TransitionGroup className=''>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item" >
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item" >
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
