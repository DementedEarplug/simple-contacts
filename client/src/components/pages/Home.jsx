import React, {useContext, useEffect} from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import AuthContext from '../../context/auth/AuthContext'

const Home = () => {

  useEffect(() => {
    // Load user on page reloads.
    loadUser()
  }, [])

  const authContext = useContext(AuthContext)
  const {loadUser}= authContext
  
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
