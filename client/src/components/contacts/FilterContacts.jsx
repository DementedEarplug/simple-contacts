import React, { useEffect, useContext, useRef } from "react";
import ContactContext from "../../context/contact/ContactContext";

const FilterContacts = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  }, [filtered]);

  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value) {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Filter Contacts...'
        ref={text}
        onChange={onChange}
      />
    </form>
  );
};

export default FilterContacts;
