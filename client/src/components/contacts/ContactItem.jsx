import React, {useContext} from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/ContactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const setCurrent = (contact) => {
    contactContext.setCurrentContact(contact)
  }

  const onDelete = (id) => {
    contactContext.deleteContact(id);
    contactContext.clearCurrentContact();
  };

  const { name, _id, phone, email, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name + " "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {phone && (
          <li>
            <i className='fas fa-phone p'></i>
            {phone}
          </li>
        )}
        {email && (
          <li>
            <i className='fas fa-envelope-open p'></i>
            {email}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-sm btn-dark' onClick={()=>setCurrent(contact)}>Edit</button>
        <button className='btn btn-sm btn-danger' onClick={() => onDelete(_id)}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
