import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { current, addContact,updateContact, clearCurrentContact } = contactContext;
  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({ name: "", phone: "", email: "", type: "personal" });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal",
  });

  const { name, phone, email, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(current){
      updateContact(contact)
    }else{
      addContact(contact);
    }
    //  clear the form
    onClear()
  };

  const onClear = () => {
    clearCurrentContact();
  };

  return (
    <form onSubmit={onSubmit}>
      {current ? (
        <h2 className='text-primary'>Edit Contact</h2>
      ) : (
        <h2 className='text-primary'>Add Contact</h2>
      )}
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional{" "}
      <div>
        <input
          type='submit'
          value={current ? "Update Contact" : "Add Contact"}
          className='btn btn-primary btn-block'
        />
        {current && (
          <button className='btn btn-block btn-light' onClick={onClear}>
            {" "}
            Clear Contact
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
