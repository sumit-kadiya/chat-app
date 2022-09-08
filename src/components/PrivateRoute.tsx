import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../store/User-Context";

// type PrivateRouteProps = {
//   children: React.ReactNode;
// };

const PrivateRoute: React.FC = () => {
  const { isAuth } = useContext(UserContext);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
