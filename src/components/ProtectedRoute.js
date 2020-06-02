import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        // get cookie from browser if logged in
        const token = cookies.get("AUTH-TOKEN");

        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
