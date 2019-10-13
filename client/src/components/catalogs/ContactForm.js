import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/catalog/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: ""
        
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: ""
   
  });

  const {
    name
    
  } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Product" : "Add Product"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
     {/* <h5>Choose your unit system</h5>
      <input
        type="radio"
        name="unit_system"
        value="imperial"
        checked={unit_system === "imperial"}
        onChange={onChange}
      />{" "}
      Imperial{" "}
      <input
        type="radio"
        name="unit_system"
        value="metric"
        checked={unit_system === "metric"}
        onChange={onChange}
      />{" "}
      Metric
      <h3>Minimum Dimmensions</h3>
      <div className="grid-3">
        <input
          type="text"
          placeholder="Length"
          name="minL"
          value={minL}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Width"
          name="minW"
          value={minW}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Thickness"
          name="minT"
          value={minT}
          onChange={onChange}
        />
      </div>
      <h3>Maximum Dimmensions</h3>
      <div className="grid-3">
        <input
          type="text"
          placeholder="Length"
          name="maxL"
          value={maxL}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Width"
          name="maxW"
          value={maxW}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Thickness"
          name="maxT"
          value={maxT}
          onChange={onChange}
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div className="grid-2">
        <h3>Material Cost</h3>

        <input
          type="text"
          placeholder=""
          name="mat_cost"
          value={mat_cost}
          onChange={onChange}
        />
        <h3>Complexity factor</h3>
        <input
          type="text"
          placeholder=""
          name="comp_factor"
          value={comp_factor}
          onChange={onChange}
        />
     </div>*/}
      <input
        type="submit"
        value={current ? "Update Contact" : "Add Contact"}
        className="btn btn-primary btn-block"
      />
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
