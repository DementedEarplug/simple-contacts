import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

// * Take in the component and anything else thats passed in. Thats what the rest operator is for
const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  console.log(!loading);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login'/>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
