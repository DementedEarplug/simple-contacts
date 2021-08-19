import React from "react";
import PropTypes from 'prop-types'


const ContactItem = ({ contact }) => {
  console.log(contact.contact);
  const { name, id, phone, email, type } = contact;
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
        <button className='btn btn-sm btn-dark'>Edit</button>
        <button className='btn btn-sm btn-danger'>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem;
