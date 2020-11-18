import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../store/AuthContext";




const ProtectedRoute = ({
  component: OurComponent /* component prop param */,
 
  ...rest
}) => {
  //our component

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <OurComponent /* use the param*/ {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }></Route>
  );
};

export default ProtectedRoute;
