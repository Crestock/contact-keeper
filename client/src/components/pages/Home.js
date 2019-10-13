<<<<<<< Updated upstream
import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
=======
import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import ProductForm from '../products/ProductForm'
import Products from '../products/Products';
>>>>>>> Stashed changes

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
        <ProductForm/>
      </div>
      <div>
        <ContactFilter />
        <Contacts />
        <Products/>
      </div>
    </div>
  );
};

export default Home;
