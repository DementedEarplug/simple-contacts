import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import FilterContacts from "./FilterContacts";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  // gives access to the state of this context.
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts && contacts.length === 0 && !loading) {
    return <h4 className='text-center'>Please a a contact.</h4>;
  }

  return (
    <Fragment>
      {!loading && contacts !== null ? (
        <>
          <FilterContacts />
          <TransitionGroup>
            {filtered
              ? filtered.map((contact) => {
                  return (
                    <CSSTransition
                      key={contact._id}
                      timeout={500}
                      classNames='item'
                    >
                      <ContactItem contact={contact} />
                    </CSSTransition>
                  );
                })
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Fragment>
  );
};

export default Contacts;
