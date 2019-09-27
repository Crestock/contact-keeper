import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const {
    _id,
    name,
    email,
    phone,
   
    minL,
    minW,
    minT,
    maxL,
    maxW,
    maxT,
    unit_system,
    
  } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (unit_system === "metric" ? "badge-success" : "badge-primary")
          }
        >
         {unit_system}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {minL && (
          <li>
            <div className="grid-3">
              <ul>{minL}</ul>
              <ul>{minW}</ul>
              <ul>{minT}</ul>
            </div>
          </li>
        )}
        {maxL && (
          <li>
            <div className="grid-3">
              <ul>{maxL}</ul>
              <ul>{maxW}</ul>
              <ul>{maxT}</ul>
            </div>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
