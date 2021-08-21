import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/AuthContext";

const Navbar = (props) => {
  const { title, icon } = props;
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} style={{ paddingRight: "1rem" }}></i>
        {title}
      </h1>
      <ul>
        {!isAuthenticated && (
          <>
            <li>
              <Link to='/register'>Register</Link>
            </li>

            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li>Hello {user && user.name}</li>
            <li>
              <a href='#!' onClick={handleLogout}>
                <i className='fas fa-sign-out-alt' />{" "}
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Simple Contacts",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
