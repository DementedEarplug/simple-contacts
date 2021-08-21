import React, { useEffect, useContext } from "react";
import AuthContext from '../../context/auth/AuthContext'

const About = () => {
  useEffect(() => {
    // Load user on page reloads.
    loadUser();
  }, []);

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a fullstack react app for keeping contacts.
      </p>
      <p className='bg-dark p'>
        <strong>Vesrion: </strong>1.0.0
      </p>
    </div>
  );
};

export default About;
