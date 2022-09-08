import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../store/User-Context";

// type PrivateRoutePropsType = {
//   children: React.ReactNode;
// };

const PrivateRoute: React.FC = () => {
  const { isAuth } = useGlobalContext();
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
